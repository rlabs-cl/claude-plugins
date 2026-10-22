#!/usr/bin/env python3
"""
SUELO FIJO de la forma `juego-terminal` (fijación del catálogo de Arketum: se
copia tal cual en `arketum/fijaciones/suelo/` y no se edita; el cierre compara su
checksum). Las comprobaciones de uso que no escribe quien construye: que el
programa vive, no que el juego esté bien.

Arranca el artefacto por su contrato de arranque: `sh arrancar.sh` desde su raíz.

  arranca    a 80x24, a los 3 s sigue vivo, pinta algo y sin traza
  se_mueve   sin tocar nada, en 2.4 s se ven al menos 5 fotogramas distintos (un juego en tiempo real anima)
  aguanta    8 s más con flechas pulsadas, vivo y sin traza
  sale_q     con `q` termina
  pequena    a 30x10 no saca traza (avisa o sale limpio)

Uso: python3 arketum/fijaciones/suelo/suelo.py <raíz del artefacto>  →  JSON; código 0 si pasa, 1 si no.
Necesita `pyte` (`python3 -m pip install -r arketum/fijaciones/suelo/requirements.txt`).
"""

import faulthandler, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_prueba import Terminal  # noqa: E402

ARRANQUE = ['sh', 'arrancar.sh']


def pintadas(t):
    """Lo más pintado en unas cuantas muestras: un juego que borra y redibuja puede pillarse a medias."""
    n = 0
    for _ in range(5):
        t.esperar(0.15)
        n = max(n, t.pintadas())
    return n


def evaluar(raiz):
    if not os.path.isfile(os.path.join(raiz, 'arrancar.sh')):
        return {'ok': False, 'fallo': 'no hay `arrancar.sh` en la raíz del artefacto: es su contrato de arranque', 'pantalla': ''}
    r = {'comando': ' '.join(ARRANQUE)}
    with Terminal(ARRANQUE, cwd=raiz, columnas=80, filas=24) as t:
        t.tecla('ENTER')  # por si hay una pantalla de inicio que espera una tecla
        t.esperar(3)
        n = pintadas(t)
        texto = t.pantalla()
        r['arranca'] = t.vivo() and 'Traceback' not in texto and n >= 10
        if not r['arranca']:
            return {**r, 'ok': False, 'fallo': 'a 80x24 no arranca: muere, saca una traza o no pinta nada', 'pantalla': texto}
        # Movimiento: muchos fotogramas distintos. Un juego que borra y redibuja parpadea entre dos
        # estados (completo y vacío), y el parpadeo no es movimiento.
        fotos = set()
        for _ in range(12):
            t.esperar(0.2)
            fotos.add(t.foto())
        r['se_mueve'] = len(fotos) >= 5
        if not r['se_mueve']:
            return {**r, 'ok': False, 'fallo': 'la pantalla no cambia sola: no hay nada en movimiento', 'pantalla': t.pantalla()}
        for i in range(32):
            t.tecla('ARRIBA' if (i // 4) % 2 else 'ABAJO')
            t.esperar(0.25)
            if not t.vivo():
                break
        texto = t.pantalla()
        r['aguanta'] = t.vivo() and 'Traceback' not in texto
        if not r['aguanta']:
            return {**r, 'ok': False, 'fallo': 'jugando 8 s con flechas, el programa muere o saca una traza', 'pantalla': texto}
        t.tecla('q')
        t.esperar(3)
        r['sale_q'] = not t.vivo()
        if not r['sale_q']:
            return {**r, 'ok': False, 'fallo': 'con `q` el programa no termina', 'pantalla': t.pantalla()}
    with Terminal(ARRANQUE, cwd=raiz, columnas=30, filas=10) as t:
        t.esperar(2.5)
        texto = t.pantalla()
        r['pequena'] = 'Traceback' not in texto and (t.vivo() or t.codigo == 0)
        if not r['pequena']:
            return {**r, 'ok': False, 'fallo': 'a 30x10 saca una traza o sale con error en vez de avisar', 'pantalla': texto}
    return {**r, 'ok': True}


if __name__ == '__main__':
    # Un suelo nunca se queda colgado: a los 150 s escribe dónde estaba y termina con error (1).
    faulthandler.dump_traceback_later(150, exit=True)
    resultado = evaluar(os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else '.'))
    print(json.dumps(resultado, ensure_ascii=False, indent=1))
    sys.exit(0 if resultado['ok'] else 1)
