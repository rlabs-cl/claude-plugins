"""
E2E HELPER (a fixture of the Arketum catalog: it is copied as it is into
`arketum/fixtures/e2e/` and never edited; the closing compares its checksum). It is a
pytest plugin that `pytest.ini` loads (`-p terminal_e2e`), with the folder in `PYTHONPATH`:

    PYTHONPATH=arketum/fixtures/e2e python3 -m pytest -q -c arketum/fixtures/e2e/pytest.ini --rootdir=. tests/e2e

It starts the artifact the real way, with its start contract
(`sh start.sh` from its root), with fresh data: `HOME` and `DATA_DIR` in a
temporary folder of its own and a free `PORT`. The tests in `tests/e2e/` use:

- `app` (or `game`): a launcher.
  - `app()` (or `app(columns, rows)`): the application in an emulated terminal
    (`Terminal` from `terminal_probe`: `key`, `wait`, `screen`, `alive`...).
  - `app.reopen()`: closes what is open and starts again with the same data.
  - `app.server()`: starts it without a terminal (for an application that serves
    HTTP on `PORT`) and waits until it answers; returns its base URL.
  - `app.url`, `app.data`: the base URL (`http://127.0.0.1:<PORT>`) and the
    data folder.
- `e2e_http` (module): `get`, `get_json`, `post_json`, `post_form`.

An e2e test walks through what a person would do through the real interface: it
never imports the code of the artifact nor calls its functions from inside.
"""

import os, signal, socket, subprocess, sys, tempfile, time, urllib.error, urllib.request

import pytest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

START = ['sh', 'start.sh']


def _free():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def _answers(url):
    try:
        urllib.request.urlopen(url, timeout=2)
        return True
    except urllib.error.HTTPError:
        return True
    except Exception:  # noqa: BLE001
        return False


class Launcher:
    def __init__(self, root):
        self.root = root
        self.home = tempfile.mkdtemp(prefix='e2e-')
        self.data = os.path.join(self.home, 'data')
        self.port = _free()
        self.url = f'http://127.0.0.1:{self.port}'
        self.opened = []
        self.processes = []

    def environment(self):
        return {'HOME': self.home, 'DATA_DIR': self.data, 'PORT': str(self.port), 'PYTHONUNBUFFERED': '1'}

    def __call__(self, columns=80, rows=24):
        from terminal_probe import Terminal  # needs pyte; only if the terminal is used

        t = Terminal(START, cwd=self.root, columns=columns, rows=rows, env=self.environment())
        self.opened.append(t)
        return t

    def reopen(self, columns=80, rows=24):
        self.close()
        return self(columns, rows)

    def server(self, path='/', seconds=25):
        p = subprocess.Popen(START, cwd=self.root, env=dict(os.environ, **self.environment()), stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
        self.processes.append(p)
        end = time.time() + seconds
        while time.time() < end:
            if p.poll() is not None:
                raise AssertionError(f'`sh start.sh` ended with code {p.returncode} before answering on {self.url}')
            if _answers(self.url + path):
                return self.url
            time.sleep(0.2)
        raise AssertionError(f'`sh start.sh` did not answer on {self.url}{path} within {seconds} s')

    def close(self):
        for t in self.opened:
            t.close()
        self.opened = []
        for p in self.processes:
            try:
                os.killpg(p.pid, signal.SIGTERM)
                p.wait(timeout=5)
            except Exception:  # noqa: BLE001
                try:
                    os.killpg(p.pid, signal.SIGKILL)
                except Exception:  # noqa: BLE001
                    pass
        self.processes = []


@pytest.fixture
def app(request):
    l = Launcher(str(request.config.rootpath))
    yield l
    l.close()


@pytest.fixture
def game(app):
    return app
