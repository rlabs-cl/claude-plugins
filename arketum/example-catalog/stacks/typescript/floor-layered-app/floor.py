#!/usr/bin/env python3
"""
FIXED FLOOR of the `layered-app` shape (a fixture of the Arketum catalog: it is
copied as it is into `arketum/fixtures/floor/` and never edited; the closing compares
its checksum). The usage checks that whoever builds does not write: that the
application lives, can be used and closed, and starts again with its data; not
that it does well what the request asks.

It starts the artifact through its start contract: `sh start.sh` from its root,
in a terminal, with `DATA_DIR` (the folder of its data), `HOME` and `PORT` (a
free port, in case it serves HTTP) in a temporary folder of its own.

  starts     at 80x24, after 3 s it paints something and no traceback (alive, or waiting for commands)
  responds   after Enter and a few arrows still no traceback
  quits      ends cleanly (code 0) with `q`, with the command `quit`/`exit`/`q` + Enter, with the quit option of the menu, or with end of input
  restarts   with the same data (same HOME and DATA_DIR) it starts again with no traceback

Usage: python3 arketum/fixtures/floor/floor.py <root of the artifact>  ->  JSON; code 0 if it passes, 1 if not.
Needs `pyte` (`python3 -m pip install -r arketum/fixtures/floor/requirements.txt`).
"""

import faulthandler, json, os, re, socket, sys, tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_probe import Terminal  # noqa: E402

START = ['sh', 'start.sh']
# `salir` too: an application written for the 1.x contract still quits.
QUITS = [b'q', b'\r', b'quit\r', b'q\r', b'exit\r', b'salir\r']
# A menu option to quit, the one seen on screen: "5. Quit", "[0] Exit", "3) Salir"...
QUIT_OPTION = re.compile(r'[\[(]?\s*(\w)\s*[\])\.:-]\s*(?:quit|exit|close|salir|terminar|cerrar)\b', re.I)


def free():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def painted(t):
    n = 0
    for _ in range(5):
        t.wait(0.15)
        n = max(n, t.painted())
    return n


def evaluate(root):
    if not os.path.isfile(os.path.join(root, 'start.sh')):
        return {'ok': False, 'failure': 'there is no `start.sh` at the root of the artifact: it is its start contract', 'screen': ''}
    r = {'command': ' '.join(START)}
    home = tempfile.mkdtemp(prefix='floor-')
    env = {'HOME': home, 'DATA_DIR': os.path.join(home, 'data'), 'PORT': str(free())}
    with Terminal(START, cwd=root, columns=80, rows=24, env=env) as t:
        t.wait(3)
        n = painted(t)
        text = t.screen()
        r['starts'] = 'Traceback' not in text and n >= 10 and (t.alive() or t.code == 0)
        if not r['starts'] or not t.alive():
            return {**r, 'ok': False, 'failure': 'at 80x24 it does not start: it dies, shows a traceback or paints nothing', 'screen': text}
        t.key('ENTER')
        for k in ('DOWN', 'UP'):
            t.key(k)
            t.wait(0.3)
        t.wait(1)
        text = t.screen()
        r['responds'] = 'Traceback' not in text and (t.alive() or t.code == 0)
        if not r['responds']:
            return {**r, 'ok': False, 'failure': 'after Enter and a few arrows it shows a traceback or dies with an error', 'screen': text}
        for b in QUITS:
            if not t.alive():
                break
            t.key(b)
            t.wait(1.5)
        for _ in range(2):  # the quit option of the menu that is seen, and as a last resort, end of input
            m = QUIT_OPTION.search(t.screen())
            if not t.alive() or m is None:
                break
            t.key(f'{m.group(1)}\r')
            t.wait(1.5)
        if t.alive():
            t.key(b'\x04')
            t.wait(1.5)
        text = t.screen()
        r['quits'] = not t.alive() and t.code == 0 and 'Traceback' not in text
        if not r['quits']:
            return {**r, 'ok': False, 'failure': 'it does not end cleanly with `q`, nor with `quit`/`exit`/`q` + Enter, nor with the quit option of the menu, nor with end of input' if t.alive() else 'when quitting it shows a traceback or ends with an error', 'screen': text}
    env['PORT'] = str(free())
    with Terminal(START, cwd=root, columns=80, rows=24, env=env) as t:
        t.wait(3)
        text = t.screen()
        r['restarts'] = 'Traceback' not in text and (t.alive() or t.code == 0)
        if not r['restarts']:
            return {**r, 'ok': False, 'failure': 'with the data of the first time, when opening again it shows a traceback or dies', 'screen': text}
    return {**r, 'ok': True}


if __name__ == '__main__':
    # A floor never hangs: after 150 s it writes where it was and ends with an error (1).
    faulthandler.dump_traceback_later(150, exit=True)
    result = evaluate(os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else '.'))
    print(json.dumps(result, ensure_ascii=False, indent=1))
    sys.exit(0 if result['ok'] else 1)
