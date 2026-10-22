#!/usr/bin/env python3
"""
SUELO FIJO de la forma `aplicacion-por-capas` (fijación del catálogo de Arketum:
se copia tal cual en `arketum/fijaciones/suelo/` y no se edita; el cierre compara
su checksum). Las comprobaciones de uso que no escribe quien construye: que la
aplicación vive, se puede usar y cerrar, y vuelve a arrancar con sus datos; no
que haga bien lo que pide el encargo.

Arranca el artefacto por su contrato de arranque: `sh arrancar.sh` desde su raíz,
en una terminal, con `DATOS_DIR` (la carpeta de sus datos), `HOME` y `PUERTO` (un
puerto libre, por si sirve HTTP) en una carpeta temporal propia.

  arranca    a 80x24, a los 3 s pinta algo y sin traza (vivo, o esperando órdenes)
  responde   tras Enter y unas flechas sigue sin traza
  sale       termina limpio (código 0) con `q`, con la orden `salir`/`q`/`exit` + Enter, con la opción de salir del menú, o con fin de entrada
  rearranca  con los mismos datos (mismo HOME y DATOS_DIR) vuelve a arrancar sin traza

Uso: python3 arketum/fijaciones/suelo/suelo.py <raíz del artefacto>  →  JSON; código 0 si pasa, 1 si no.
Necesita `pyte` (`python3 -m pip install -r arketum/fijaciones/suelo/requirements.txt`).
"""

import faulthandler, json, os, re, socket, sys, tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_prueba import Terminal  # noqa: E402

ARRANQUE = ['sh', 'arrancar.sh']
SALIDAS = [b'q', b'\r', b'salir\r', b'q\r', b'exit\r']
# Una opción de menú para salir, la que se vea en pantalla: «5. Salir», «[0] Exit»…
OPCION_DE_SALIR = re.compile(r'[\[(]?\s*(\w)\s*[\])\.:-]\s*(?:salir|exit|quit|terminar|cerrar)\b', re.I)


def libre():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def pintadas(t):
    n = 0
    for _ in range(5):
        t.esperar(0.15)
        n = max(n, t.pintadas())
    return n


def evaluar(raiz):
    if not os.path.isfile(os.path.join(raiz, 'arrancar.sh')):
        return {'ok': False, 'fallo': 'no hay `arrancar.sh` en la raíz del artefacto: es su contrato de arranque', 'pantalla': ''}
    r = {'comando': ' '.join(ARRANQUE)}
    casa = tempfile.mkdtemp(prefix='suelo-')
    env = {'HOME': casa, 'DATOS_DIR': os.path.join(casa, 'datos'), 'PUERTO': str(libre())}
    with Terminal(ARRANQUE, cwd=raiz, columnas=80, filas=24, env=env) as t:
        t.esperar(3)
        n = pintadas(t)
        texto = t.pantalla()
        r['arranca'] = 'Traceback' not in texto and n >= 10 and (t.vivo() or t.codigo == 0)
        if not r['arranca'] or not t.vivo():
            return {**r, 'ok': False, 'fallo': 'a 80x24 no arranca: muere, saca una traza o no pinta nada', 'pantalla': texto}
        t.tecla('ENTER')
        for k in ('ABAJO', 'ARRIBA'):
            t.tecla(k)
            t.esperar(0.3)
        t.esperar(1)
        texto = t.pantalla()
        r['responde'] = 'Traceback' not in texto and (t.vivo() or t.codigo == 0)
        if not r['responde']:
            return {**r, 'ok': False, 'fallo': 'tras Enter y unas flechas saca una traza o muere con error', 'pantalla': texto}
        for b in SALIDAS:
            if not t.vivo():
                break
            t.tecla(b)
            t.esperar(1.5)
        for _ in range(2):  # la opción de salir del menú que se vea, y como último recurso, fin de entrada
            m = OPCION_DE_SALIR.search(t.pantalla())
            if not t.vivo() or m is None:
                break
            t.tecla(f'{m.group(1)}\r')
            t.esperar(1.5)
        if t.vivo():
            t.tecla(b'\x04')
            t.esperar(1.5)
        texto = t.pantalla()
        r['sale'] = not t.vivo() and t.codigo == 0 and 'Traceback' not in texto
        if not r['sale']:
            return {**r, 'ok': False, 'fallo': 'no termina limpio con `q`, ni con `salir`/`q`/`exit` + Enter, ni con fin de entrada' if t.vivo() else 'al salir saca una traza o termina con error', 'pantalla': texto}
    env['PUERTO'] = str(libre())
    with Terminal(ARRANQUE, cwd=raiz, columnas=80, filas=24, env=env) as t:
        t.esperar(3)
        texto = t.pantalla()
        r['rearranca'] = 'Traceback' not in texto and (t.vivo() or t.codigo == 0)
        if not r['rearranca']:
            return {**r, 'ok': False, 'fallo': 'con los datos de la primera vez, al volver a abrir saca una traza o muere', 'pantalla': texto}
    return {**r, 'ok': True}


if __name__ == '__main__':
    # Un suelo nunca se queda colgado: a los 150 s escribe dónde estaba y termina con error (1).
    faulthandler.dump_traceback_later(150, exit=True)
    resultado = evaluar(os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else '.'))
    print(json.dumps(resultado, ensure_ascii=False, indent=1))
    sys.exit(0 if resultado['ok'] else 1)
