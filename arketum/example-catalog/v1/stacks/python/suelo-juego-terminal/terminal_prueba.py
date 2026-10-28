"""
TERMINAL DE PRUEBA (fijación del catálogo de Arketum: se copia tal cual y no se
edita). Prueba un programa de terminal como lo usaría una persona, en una
pseudo-terminal emulada con pyte (`python3 -m pip install pyte`).

    from terminal_prueba import Terminal

    with Terminal(['sh', 'arrancar.sh'], cwd='.', columnas=80, filas=24) as t:
        t.esperar(2)                 # deja correr el programa
        t.tecla('ARRIBA')            # ARRIBA, ABAJO, IZQUIERDA, DERECHA, ENTER, ESC o un carácter
        t.esperar(0.5)
        texto = t.pantalla()         # lo que se ve, una cadena con una línea por fila
        assert t.vivo()              # sigue corriendo
        assert 'Traceback' not in texto

`t.lineas()` da la lista de filas y `t.codigo` el código de salida cuando termina.
"""

import fcntl, os, pty, select, signal, struct, termios, time

import pyte

TECLAS = {'ARRIBA': b'\x1b[A', 'ABAJO': b'\x1b[B', 'DERECHA': b'\x1b[C', 'IZQUIERDA': b'\x1b[D', 'ENTER': b'\r', 'ESC': b'\x1b'}


class Terminal:
    def __init__(self, comando, cwd='.', columnas=80, filas=24, env=None):
        self._pantalla = pyte.Screen(columnas, filas)
        self._flujo = pyte.ByteStream(self._pantalla)
        pid, fd = pty.fork()
        if pid == 0:
            entorno = dict(os.environ, LANG='en_US.UTF-8', LC_ALL='en_US.UTF-8', TERM='xterm-256color', COLUMNS=str(columnas), LINES=str(filas))
            entorno.update(env or {})
            os.chdir(cwd)
            os.execvpe(comando[0], comando, entorno)
        fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack('HHHH', filas, columnas, 0, 0))
        self.pid, self.fd, self._vivo, self.codigo = pid, fd, True, None

    def __enter__(self):
        return self

    def __exit__(self, *_):
        self.cerrar()

    def esperar(self, segundos):
        fin = time.time() + segundos
        while time.time() < fin:
            r, _, _ = select.select([self.fd], [], [], 0.05)
            if r:
                try:
                    datos = os.read(self.fd, 65536)
                except OSError:
                    datos = b''
                if datos:
                    self._flujo.feed(datos)
                else:
                    time.sleep(0.05)
            self._comprobar()
        self._comprobar()

    def tecla(self, nombre):
        datos = TECLAS.get(nombre, nombre.encode() if isinstance(nombre, str) else nombre)
        # Como un terminal real: si el programa activó el modo de cursor de aplicación (DECCKM, el modo privado 1, que pyte guarda como 1 << 5; curses
        # con keypad), las flechas van como ESC O x en vez de ESC [ x.
        if datos[:2] == b'\x1b[' and len(datos) == 3 and datos[2:] in b'ABCD' and (1 << 5) in self._pantalla.mode:
            datos = b'\x1bO' + datos[2:]
        try:
            os.write(self.fd, datos)
        except OSError:
            pass

    def pantalla(self):
        return '\n'.join(self._pantalla.display)

    def lineas(self):
        return list(self._pantalla.display)

    def pintadas(self):
        """Cuántas celdas se ven: con carácter, en vídeo inverso o con un fondo distinto del
        dominante (al borrar, pyte rellena con el fondo del cursor: ese no cuenta)."""
        from collections import Counter
        filas, cols = self._pantalla.lines, self._pantalla.columns
        celdas = [self._pantalla.buffer[y][x] for y in range(filas) for x in range(cols)]
        fondo = Counter(c.bg for c in celdas).most_common(1)[0][0]
        return sum(1 for c in celdas if c.data.strip() or c.reverse or c.bg != fondo)

    def foto(self):
        """Lo que se ve, con forma: el texto y dónde hay celdas en vídeo inverso o con fondo distinto del dominante."""
        from collections import Counter
        filas, cols = self._pantalla.lines, self._pantalla.columns
        fondo = Counter(self._pantalla.buffer[y][x].bg for y in range(filas) for x in range(cols)).most_common(1)[0][0]
        marcas = tuple((y, x) for y in range(filas) for x in range(cols) if self._pantalla.buffer[y][x].reverse or self._pantalla.buffer[y][x].bg != fondo)
        return (self.pantalla(), marcas)

    def vivo(self):
        self._comprobar()
        return self._vivo

    def _comprobar(self):
        if not self._vivo:
            return
        p, estado = os.waitpid(self.pid, os.WNOHANG)
        if p != 0:
            self._vivo = False
            self.codigo = os.waitstatus_to_exitcode(estado)

    def cerrar(self):
        if self._vivo:
            try:
                os.kill(self.pid, signal.SIGKILL)
                os.waitpid(self.pid, 0)
            except OSError:
                pass
            self._vivo = False
        try:
            os.close(self.fd)
        except OSError:
            pass
