"""
AYUDA E2E (fijación del catálogo de Arketum: se copia tal cual en
`arketum/fijaciones/e2e/` y no se edita; el cierre compara su checksum). Es un
complemento de pytest que carga `pytest.ini` (`-p terminal_e2e`), con la carpeta en `PYTHONPATH`:

    PYTHONPATH=arketum/fijaciones/e2e python3 -m pytest -q -c arketum/fijaciones/e2e/pytest.ini --rootdir=. tests/e2e

Arranca el artefacto por el camino real, con su contrato de arranque
(`sh arrancar.sh` desde su raíz), con datos nuevos: `HOME` y `DATOS_DIR` en una
carpeta temporal propia y `PUERTO` libre. Las pruebas de `tests/e2e/` usan:

- `app` (o `juego`): un lanzador.
  - `app()` (o `app(columnas, filas)`): la aplicación en una terminal emulada
    (`Terminal` de `terminal_prueba`: `tecla`, `esperar`, `pantalla`, `vivo`…).
  - `app.reabrir()`: cierra lo abierto y vuelve a arrancar con los mismos datos.
  - `app.servidor()`: la arranca sin terminal (para una aplicación que sirve
    HTTP en `PUERTO`) y espera a que responda; devuelve su URL base.
  - `app.url`, `app.datos`: la URL base (`http://127.0.0.1:<PUERTO>`) y la
    carpeta de datos.
- `e2e_http` (módulo): `get`, `get_json`, `post_json`, `post_form`.

Una prueba e2e recorre lo que haría una persona por la interfaz real: nunca
importa el código del artefacto ni llama a sus funciones por dentro.
"""

import os, signal, socket, subprocess, sys, tempfile, time, urllib.error, urllib.request

import pytest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ARRANQUE = ['sh', 'arrancar.sh']


def _libre():
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def _responde(url):
    try:
        urllib.request.urlopen(url, timeout=2)
        return True
    except urllib.error.HTTPError:
        return True
    except Exception:  # noqa: BLE001
        return False


class Lanzador:
    def __init__(self, raiz):
        self.raiz = raiz
        self.casa = tempfile.mkdtemp(prefix='e2e-')
        self.datos = os.path.join(self.casa, 'datos')
        self.puerto = _libre()
        self.url = f'http://127.0.0.1:{self.puerto}'
        self.abiertas = []
        self.procesos = []

    def entorno(self):
        return {'HOME': self.casa, 'DATOS_DIR': self.datos, 'PUERTO': str(self.puerto), 'PYTHONUNBUFFERED': '1'}

    def __call__(self, columnas=80, filas=24):
        from terminal_prueba import Terminal  # necesita pyte; solo si se usa la terminal

        t = Terminal(ARRANQUE, cwd=self.raiz, columnas=columnas, filas=filas, env=self.entorno())
        self.abiertas.append(t)
        return t

    def reabrir(self, columnas=80, filas=24):
        self.cerrar()
        return self(columnas, filas)

    def servidor(self, ruta='/', segundos=25):
        p = subprocess.Popen(ARRANQUE, cwd=self.raiz, env=dict(os.environ, **self.entorno()), stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
        self.procesos.append(p)
        fin = time.time() + segundos
        while time.time() < fin:
            if p.poll() is not None:
                raise AssertionError(f'`sh arrancar.sh` terminó con código {p.returncode} antes de responder en {self.url}')
            if _responde(self.url + ruta):
                return self.url
            time.sleep(0.2)
        raise AssertionError(f'`sh arrancar.sh` no respondió en {self.url}{ruta} en {segundos} s')

    def cerrar(self):
        for t in self.abiertas:
            t.cerrar()
        self.abiertas = []
        for p in self.procesos:
            try:
                os.killpg(p.pid, signal.SIGTERM)
                p.wait(timeout=5)
            except Exception:  # noqa: BLE001
                try:
                    os.killpg(p.pid, signal.SIGKILL)
                except Exception:  # noqa: BLE001
                    pass
        self.procesos = []


@pytest.fixture
def app(request):
    l = Lanzador(str(request.config.rootpath))
    yield l
    l.cerrar()


@pytest.fixture
def juego(app):
    return app
