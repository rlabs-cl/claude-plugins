"""
TERMINAL PROBE (a fixture of the Arketum catalog: it is copied as it is and never
edited). It tests a terminal program the way a person would use it, in a
pseudo-terminal emulated with pyte (`python3 -m pip install pyte`).

    from terminal_probe import Terminal

    with Terminal(['sh', 'start.sh'], cwd='.', columns=80, rows=24) as t:
        t.wait(2)                    # let the program run
        t.key('UP')                  # UP, DOWN, LEFT, RIGHT, ENTER, ESC or a character
        t.wait(0.5)
        text = t.screen()            # what is seen, a string with one line per row
        assert t.alive()             # still running
        assert 'Traceback' not in text

`t.lines()` gives the list of rows and `t.code` the exit code when it ends.
"""

import fcntl, os, pty, select, signal, struct, termios, time

import pyte

KEYS = {'UP': b'\x1b[A', 'DOWN': b'\x1b[B', 'RIGHT': b'\x1b[C', 'LEFT': b'\x1b[D', 'ENTER': b'\r', 'ESC': b'\x1b'}


class Terminal:
    def __init__(self, command, cwd='.', columns=80, rows=24, env=None):
        self._screen = pyte.Screen(columns, rows)
        self._stream = pyte.ByteStream(self._screen)
        pid, fd = pty.fork()
        if pid == 0:
            environment = dict(os.environ, LANG='en_US.UTF-8', LC_ALL='en_US.UTF-8', TERM='xterm-256color', COLUMNS=str(columns), LINES=str(rows))
            environment.update(env or {})
            os.chdir(cwd)
            os.execvpe(command[0], command, environment)
        fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack('HHHH', rows, columns, 0, 0))
        self.pid, self.fd, self._alive, self.code = pid, fd, True, None

    def __enter__(self):
        return self

    def __exit__(self, *_):
        self.close()

    def wait(self, seconds):
        end = time.time() + seconds
        while time.time() < end:
            r, _, _ = select.select([self.fd], [], [], 0.05)
            if r:
                try:
                    data = os.read(self.fd, 65536)
                except OSError:
                    data = b''
                if data:
                    self._stream.feed(data)
                else:
                    time.sleep(0.05)
            self._check()
        self._check()

    def key(self, name):
        data = KEYS.get(name, name.encode() if isinstance(name, str) else name)
        # Like a real terminal: if the program turned on the application cursor mode (DECCKM, private mode 1, which pyte keeps as 1 << 5; curses
        # with keypad), the arrows go as ESC O x instead of ESC [ x.
        if data[:2] == b'\x1b[' and len(data) == 3 and data[2:] in b'ABCD' and (1 << 5) in self._screen.mode:
            data = b'\x1bO' + data[2:]
        try:
            os.write(self.fd, data)
        except OSError:
            pass

    def screen(self):
        return '\n'.join(self._screen.display)

    def lines(self):
        return list(self._screen.display)

    def painted(self):
        """How many cells are seen: with a character, in reverse video or with a background other than the
        dominant one (when erasing, pyte fills with the cursor's background: that one does not count)."""
        from collections import Counter
        rows, cols = self._screen.lines, self._screen.columns
        cells = [self._screen.buffer[y][x] for y in range(rows) for x in range(cols)]
        background = Counter(c.bg for c in cells).most_common(1)[0][0]
        return sum(1 for c in cells if c.data.strip() or c.reverse or c.bg != background)

    def snapshot(self):
        """What is seen, with shape: the text and where there are cells in reverse video or with a background other than the dominant one."""
        from collections import Counter
        rows, cols = self._screen.lines, self._screen.columns
        background = Counter(self._screen.buffer[y][x].bg for y in range(rows) for x in range(cols)).most_common(1)[0][0]
        marks = tuple((y, x) for y in range(rows) for x in range(cols) if self._screen.buffer[y][x].reverse or self._screen.buffer[y][x].bg != background)
        return (self.screen(), marks)

    def alive(self):
        self._check()
        return self._alive

    def _check(self):
        if not self._alive:
            return
        p, status = os.waitpid(self.pid, os.WNOHANG)
        if p != 0:
            self._alive = False
            self.code = os.waitstatus_to_exitcode(status)

    def close(self):
        if self._alive:
            try:
                os.kill(self.pid, signal.SIGKILL)
                os.waitpid(self.pid, 0)
            except OSError:
                pass
            self._alive = False
        try:
            os.close(self.fd)
        except OSError:
            pass
