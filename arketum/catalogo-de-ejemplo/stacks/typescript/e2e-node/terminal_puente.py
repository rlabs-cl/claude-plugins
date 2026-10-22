"""
PUENTE DE TERMINAL (fijación del catálogo de Arketum: no se edita). Lo lanza
`app.mjs` (`abrirTerminal`): arranca el artefacto con `sh arrancar.sh` en una
terminal emulada (`terminal_prueba`, con pyte) y obedece órdenes en JSON, una
por línea, por su entrada; contesta una línea JSON por orden:

  {"op": "tecla", "k": "ARRIBA"}   →  {"ok": true}
  {"op": "esperar", "s": 0.5}      →  {"ok": true}
  {"op": "pantalla"}               →  {"ok": true, "pantalla": "...", "vivo": true, "codigo": null}
  {"op": "cerrar"}                 →  {"ok": true, "codigo": ...}

Uso: python3 -B terminal_puente.py <columnas> <filas>  (desde la raíz del artefacto)
"""

import json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_prueba import Terminal  # noqa: E402


def main():
    columnas, filas = int(sys.argv[1]), int(sys.argv[2])
    t = Terminal(['sh', 'arrancar.sh'], cwd=os.getcwd(), columnas=columnas, filas=filas)
    try:
        for linea in sys.stdin:
            orden = json.loads(linea)
            op = orden.get('op')
            if op == 'tecla':
                t.tecla(orden['k'])
                r = {'ok': True}
            elif op == 'esperar':
                t.esperar(float(orden.get('s', 0.1)))
                r = {'ok': True}
            elif op == 'pantalla':
                vivo = t.vivo()
                r = {'ok': True, 'pantalla': t.pantalla(), 'vivo': vivo, 'codigo': t.codigo}
            elif op == 'cerrar':
                t.cerrar()
                r = {'ok': True, 'codigo': t.codigo}
            else:
                r = {'ok': False, 'error': f'orden desconocida: {op}'}
            sys.stdout.write(json.dumps(r) + '\n')
            sys.stdout.flush()
            if op == 'cerrar':
                break
    finally:
        t.cerrar()


if __name__ == '__main__':
    main()
