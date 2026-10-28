/**
 * E2E HELPER (a fixture of the Arketum catalog: it is copied as it is into
 * `arketum/fixtures/e2e/` and never edited; the closing compares its checksum).
 *
 * It starts the artifact the real way, with its start contract
 * (`sh start.sh` from its root), with fresh data: `HOME` and `DATA_DIR` in
 * a temporary folder of its own and a free `PORT`. The tests in `src/e2e/`:
 *
 *   import { start } from '../../arketum/fixtures/e2e/app.mjs'
 *   const app = await start()                  // without waiting for anything
 *   await app.server('/')                      // waits until it answers on PORT; returns the URL
 *   const r = await fetch(`${app.url}/`)       // HTTP with Node's fetch
 *   app.write('q\n')                           // the application's input
 *   await app.waitForOutput('Goodbye')         // what it writes, until it appears
 *   await app.close()                          // and `app.reopen()`, with the same data
 *
 * For a terminal program, `openTerminal` (below) starts it in an emulated
 * terminal.
 *
 * An e2e test walks through what a person would do through the real interface: it
 * never imports the code of the artifact nor calls its functions from inside. `start`
 * only uses Node; `openTerminal` needs `python3` with `pyte`.

 */

import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const free = () =>
  new Promise((resolve, reject) => {
    const s = createServer()
    s.unref()
    s.on('error', reject)
    s.listen(0, '127.0.0.1', () => {
      const { port } = s.address()
      s.close(() => resolve(port))
    })
  })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * The artifact in an emulated terminal (for a terminal program, like a
 * game): through the Python bridge of this fixture, which needs `python3` with
 * `pyte`. Same start and same variables as `start`.
 *
 *   const t = await openTerminal({ columns: 80, rows: 24 })
 *   await t.wait(1); await t.key('UP'); const text = await t.screen()
 *   await t.key('q'); await t.wait(1); expect(await t.alive()).toBe(false)
 *   await t.close()
 */
export async function openTerminal(options = {}) {
  const home = options.home ?? mkdtempSync(join(tmpdir(), 'e2e-'))
  const port = options.port ?? (await free())
  const root = options.root ?? process.cwd()
  const bridge = join(dirname(fileURLToPath(import.meta.url)), 'terminal_bridge.py')
  const child = spawn('python3', ['-B', bridge, String(options.columns ?? 80), String(options.rows ?? 24)], {
    cwd: root,
    env: { ...process.env, HOME: home, DATA_DIR: join(home, 'data'), PORT: String(port) },
    stdio: ['pipe', 'pipe', 'pipe'],
  })
  let rest = ''
  let errors = ''
  const waiting = []
  child.stderr.on('data', (d) => (errors += d))
  child.stdout.on('data', (d) => {
    rest += d
    let i
    while ((i = rest.indexOf('\n')) >= 0) {
      const line = rest.slice(0, i)
      rest = rest.slice(i + 1)
      const r = JSON.parse(line)
      const pending = waiting.shift()
      // A command the bridge could not carry out is an error of the test, not an answer.
      if (pending !== undefined) r.ok === false ? pending.reject(new Error(`the terminal bridge could not: ${r.error ?? JSON.stringify(r)}`)) : pending.resolve(r)
    }
  })
  const end = new Promise((r) => child.on('exit', r))
  // If the bridge ends with unanswered commands, they are errors: the test does not keep waiting.
  child.on('exit', () => {
    for (const e of waiting.splice(0)) e.reject(new Error(`the terminal bridge ended: ${errors}`))
  })
  const ask = (command) =>
    new Promise((resolve, reject) => {
      if (child.exitCode !== null) return reject(new Error(`the terminal bridge ended: ${errors}`))
      waiting.push({ resolve, reject })
      child.stdin.write(`${JSON.stringify(command)}\n`)
    })
  const state = async () => ask({ op: 'screen' })
  return {
    data: join(home, 'data'),
    key: async (k) => void (await ask({ op: 'key', k })),
    wait: async (s) => void (await ask({ op: 'wait', s })),
    screen: async () => (await state()).screen,
    alive: async () => (await state()).alive,
    code: async () => (await state()).code,
    async close() {
      if (child.exitCode === null) {
        await ask({ op: 'close' }).catch(() => undefined)
        await Promise.race([end, sleep(3000)])
      }
    },
  }
}

export async function start(options = {}) {
  const home = options.home ?? mkdtempSync(join(tmpdir(), 'e2e-'))
  const port = options.port ?? (await free())
  const data = join(home, 'data')
  const root = options.root ?? process.cwd()
  const child = spawn('sh', ['start.sh'], {
    cwd: root,
    env: { ...process.env, HOME: home, DATA_DIR: data, PORT: String(port) },
    stdio: ['pipe', 'pipe', 'pipe'],
    detached: true,
  })
  let output = ''
  child.stdout.on('data', (d) => (output += d))
  child.stderr.on('data', (d) => (output += d))
  let code = null
  const ended = new Promise((r) => child.on('exit', (c) => r((code = c))))
  const app = {
    url: `http://127.0.0.1:${port}`,
    port,
    data,
    get code() {
      return code
    },
    output: () => output,
    alive: () => code === null,
    write: (text) => child.stdin.write(text),
    async waitForOutput(text, ms = 10000) {
      const end = Date.now() + ms
      while (Date.now() < end) {
        if (output.includes(text)) return output
        if (code !== null) break
        await sleep(50)
      }
      throw new Error(`«${text}» did not appear in the output of \`sh start.sh\`:\n${output}`)
    },
    async server(path = '/', ms = 25000) {
      const end = Date.now() + ms
      while (Date.now() < end) {
        if (code !== null) throw new Error(`\`sh start.sh\` ended with code ${code} before answering on ${app.url}:\n${output}`)
        try {
          await fetch(`${app.url}${path}`)
          return app.url
        } catch {
          await sleep(200)
        }
      }
      throw new Error(`\`sh start.sh\` did not answer on ${app.url}${path}`)
    },
    async close() {
      if (code === null) {
        try {
          process.kill(-child.pid, 'SIGTERM')
        } catch {}
        await Promise.race([ended, sleep(5000)])
        if (code === null) {
          try {
            process.kill(-child.pid, 'SIGKILL')
          } catch {}
        }
      }
      return code
    },
    async waitForEnd(ms = 5000) {
      await Promise.race([ended, sleep(ms)])
      return code
    },
    async reopen() {
      await app.close()
      return start({ ...options, home, port })
    },
  }
  return app
}
