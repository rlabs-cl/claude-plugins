"""
TERMINAL BRIDGE (a fixture of the Arketum catalog: never edited). `app.mjs`
launches it (`openTerminal`): it starts the artifact with `sh start.sh` in an
emulated terminal (`terminal_probe`, with pyte) and obeys commands in JSON, one
per line, on its input; it answers one JSON line per command:

  {"op": "key", "k": "UP"}       ->  {"ok": true}
  {"op": "wait", "s": 0.5}       ->  {"ok": true}
  {"op": "screen"}               ->  {"ok": true, "screen": "...", "alive": true, "code": null}
  {"op": "close"}                ->  {"ok": true, "code": ...}

Usage: python3 -B terminal_bridge.py <columns> <rows>  (from the root of the artifact)
"""

import json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_probe import Terminal  # noqa: E402


def main():
    columns, rows = int(sys.argv[1]), int(sys.argv[2])
    t = Terminal(['sh', 'start.sh'], cwd=os.getcwd(), columns=columns, rows=rows)
    try:
        for line in sys.stdin:
            command = json.loads(line)
            op = command.get('op')
            if op == 'key':
                t.key(command['k'])
                r = {'ok': True}
            elif op == 'wait':
                t.wait(float(command.get('s', 0.1)))
                r = {'ok': True}
            elif op == 'screen':
                alive = t.alive()
                r = {'ok': True, 'screen': t.screen(), 'alive': alive, 'code': t.code}
            elif op == 'close':
                t.close()
                r = {'ok': True, 'code': t.code}
            else:
                r = {'ok': False, 'error': f'unknown command: {op}'}
            sys.stdout.write(json.dumps(r) + '\n')
            sys.stdout.flush()
            if op == 'close':
                break
    finally:
        t.close()


if __name__ == '__main__':
    main()
