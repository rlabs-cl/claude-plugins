#!/usr/bin/env python3
"""
FIXED FLOOR of the `terminal-game` shape (a fixture of the Arketum catalog: it is
copied as it is into `arketum/fixtures/floor/` and never edited; the closing compares
its checksum). The usage checks that whoever builds does not write: that the
program lives, not that the game is right.

It starts the artifact through its start contract: `sh start.sh` from its root.

  starts     at 80x24, after 3 s it is still alive, paints something and no traceback
  moves      without touching anything, within 2.4 s at least 5 different frames are seen (a real-time game animates)
  holds      8 s more with arrows pressed, alive and no traceback
  quits_q    with `q` it ends
  small      at 30x10 it shows no traceback (it warns or exits cleanly)

Usage: python3 arketum/fixtures/floor/floor.py <root of the artifact>  ->  JSON; code 0 if it passes, 1 if not.
Needs `pyte` (`python3 -m pip install -r arketum/fixtures/floor/requirements.txt`).
"""

import faulthandler, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terminal_probe import Terminal  # noqa: E402

START = ['sh', 'start.sh']


def painted(t):
    """The most painted over a few samples: a game that erases and redraws can be caught halfway."""
    n = 0
    for _ in range(5):
        t.wait(0.15)
        n = max(n, t.painted())
    return n


def evaluate(root):
    if not os.path.isfile(os.path.join(root, 'start.sh')):
        return {'ok': False, 'failure': 'there is no `start.sh` at the root of the artifact: it is its start contract', 'screen': ''}
    r = {'command': ' '.join(START)}
    with Terminal(START, cwd=root, columns=80, rows=24) as t:
        t.key('ENTER')  # in case there is a start screen that waits for a key
        t.wait(3)
        n = painted(t)
        text = t.screen()
        r['starts'] = t.alive() and 'Traceback' not in text and n >= 10
        if not r['starts']:
            return {**r, 'ok': False, 'failure': 'at 80x24 it does not start: it dies, shows a traceback or paints nothing', 'screen': text}
        # Movement: many different frames. A game that erases and redraws flickers between two
        # states (full and empty), and the flicker is not movement.
        snapshots = set()
        for _ in range(12):
            t.wait(0.2)
            snapshots.add(t.snapshot())
        r['moves'] = len(snapshots) >= 5
        if not r['moves']:
            return {**r, 'ok': False, 'failure': 'the screen does not change by itself: nothing is moving', 'screen': t.screen()}
        for i in range(32):
            t.key('UP' if (i // 4) % 2 else 'DOWN')
            t.wait(0.25)
            if not t.alive():
                break
        text = t.screen()
        r['holds'] = t.alive() and 'Traceback' not in text
        if not r['holds']:
            return {**r, 'ok': False, 'failure': 'playing 8 s with arrows, the program dies or shows a traceback', 'screen': text}
        t.key('q')
        t.wait(3)
        r['quits_q'] = not t.alive()
        if not r['quits_q']:
            return {**r, 'ok': False, 'failure': 'with `q` the program does not end', 'screen': t.screen()}
    with Terminal(START, cwd=root, columns=30, rows=10) as t:
        t.wait(2.5)
        text = t.screen()
        r['small'] = 'Traceback' not in text and (t.alive() or t.code == 0)
        if not r['small']:
            return {**r, 'ok': False, 'failure': 'at 30x10 it shows a traceback or exits with an error instead of warning', 'screen': text}
    return {**r, 'ok': True}


if __name__ == '__main__':
    # A floor never hangs: after 150 s it writes where it was and ends with an error (1).
    faulthandler.dump_traceback_later(150, exit=True)
    result = evaluate(os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else '.'))
    print(json.dumps(result, ensure_ascii=False, indent=1))
    sys.exit(0 if result['ok'] else 1)
