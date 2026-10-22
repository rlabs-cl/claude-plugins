/**
 * AYUDA E2E (fijación del catálogo de Arketum: se copia tal cual en
 * `arketum/fijaciones/e2e/` y no se edita; el cierre compara su checksum).
 *
 * Arranca el artefacto por el camino real, con su contrato de arranque
 * (`sh arrancar.sh` desde su raíz), con datos nuevos: `HOME` y `DATOS_DIR` en
 * una carpeta temporal propia y `PUERTO` libre. Las pruebas de `src/e2e/`:
 *
 *   import { arrancar } from '../../arketum/fijaciones/e2e/app.mjs'
 *   const app = await arrancar()               // sin esperar a nada
 *   await app.servidor('/')                    // espera a que responda en PUERTO; devuelve la URL
 *   const r = await fetch(`${app.url}/`)       // HTTP con el fetch de Node
 *   app.escribir('q\n')                        // la entrada de la aplicación
 *   await app.esperarSalida('Hasta luego')     // lo que escribe, hasta que aparezca
 *   await app.cerrar()                         // y `app.reabrir()`, con los mismos datos
 *
 * Para un programa de terminal, `abrirTerminal` (más abajo) lo arranca en una
 * terminal emulada.
 *
 * Una prueba e2e recorre lo que haría una persona por la interfaz real: nunca
 * importa el código del artefacto ni llama a sus funciones por dentro. `arrancar`
 * solo usa Node; `abrirTerminal` necesita `python3` con `pyte`.

 */

import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const libre = () =>
  new Promise((resolver, rechazar) => {
    const s = createServer()
    s.unref()
    s.on('error', rechazar)
    s.listen(0, '127.0.0.1', () => {
      const { port } = s.address()
      s.close(() => resolver(port))
    })
  })

const esperar = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * El artefacto en una terminal emulada (para un programa de terminal, como un
 * juego): por el puente de Python de esta fijación, que necesita `python3` con
 * `pyte`. Mismo arranque y mismas variables que `arrancar`.
 *
 *   const t = await abrirTerminal({ columnas: 80, filas: 24 })
 *   await t.esperar(1); await t.tecla('ARRIBA'); const texto = await t.pantalla()
 *   await t.tecla('q'); await t.esperar(1); expect(await t.vivo()).toBe(false)
 *   await t.cerrar()
 */
export async function abrirTerminal(opciones = {}) {
  const casa = opciones.casa ?? mkdtempSync(join(tmpdir(), 'e2e-'))
  const puerto = opciones.puerto ?? (await libre())
  const raiz = opciones.raiz ?? process.cwd()
  const puente = join(dirname(fileURLToPath(import.meta.url)), 'terminal_puente.py')
  const hijo = spawn('python3', ['-B', puente, String(opciones.columnas ?? 80), String(opciones.filas ?? 24)], {
    cwd: raiz,
    env: { ...process.env, HOME: casa, DATOS_DIR: join(casa, 'datos'), PUERTO: String(puerto) },
    stdio: ['pipe', 'pipe', 'pipe'],
  })
  let resto = ''
  let errores = ''
  const esperando = []
  hijo.stderr.on('data', (d) => (errores += d))
  hijo.stdout.on('data', (d) => {
    resto += d
    let i
    while ((i = resto.indexOf('\n')) >= 0) {
      const linea = resto.slice(0, i)
      resto = resto.slice(i + 1)
      const r = JSON.parse(linea)
      const espera = esperando.shift()
      // Una orden que el puente no pudo cumplir es un error de la prueba, no una respuesta.
      if (espera !== undefined) r.ok === false ? espera.rechazar(new Error(`el puente de terminal no pudo: ${r.error ?? JSON.stringify(r)}`)) : espera.resolver(r)
    }
  })
  const fin = new Promise((r) => hijo.on('exit', r))
  // Si el puente termina con órdenes sin contestar, son errores: la prueba no se queda esperando.
  hijo.on('exit', () => {
    for (const e of esperando.splice(0)) e.rechazar(new Error(`el puente de terminal terminó: ${errores}`))
  })
  const pedir = (orden) =>
    new Promise((resolver, rechazar) => {
      if (hijo.exitCode !== null) return rechazar(new Error(`el puente de terminal terminó: ${errores}`))
      esperando.push({ resolver, rechazar })
      hijo.stdin.write(`${JSON.stringify(orden)}\n`)
    })
  const estado = async () => pedir({ op: 'pantalla' })
  return {
    datos: join(casa, 'datos'),
    tecla: async (k) => void (await pedir({ op: 'tecla', k })),
    esperar: async (s) => void (await pedir({ op: 'esperar', s })),
    pantalla: async () => (await estado()).pantalla,
    vivo: async () => (await estado()).vivo,
    codigo: async () => (await estado()).codigo,
    async cerrar() {
      if (hijo.exitCode === null) {
        await pedir({ op: 'cerrar' }).catch(() => undefined)
        await Promise.race([fin, esperar(3000)])
      }
    },
  }
}

export async function arrancar(opciones = {}) {
  const casa = opciones.casa ?? mkdtempSync(join(tmpdir(), 'e2e-'))
  const puerto = opciones.puerto ?? (await libre())
  const datos = join(casa, 'datos')
  const raiz = opciones.raiz ?? process.cwd()
  const hijo = spawn('sh', ['arrancar.sh'], {
    cwd: raiz,
    env: { ...process.env, HOME: casa, DATOS_DIR: datos, PUERTO: String(puerto) },
    stdio: ['pipe', 'pipe', 'pipe'],
    detached: true,
  })
  let salida = ''
  hijo.stdout.on('data', (d) => (salida += d))
  hijo.stderr.on('data', (d) => (salida += d))
  let codigo = null
  const termino = new Promise((r) => hijo.on('exit', (c) => r((codigo = c))))
  const app = {
    url: `http://127.0.0.1:${puerto}`,
    puerto,
    datos,
    get codigo() {
      return codigo
    },
    salida: () => salida,
    vivo: () => codigo === null,
    escribir: (texto) => hijo.stdin.write(texto),
    async esperarSalida(texto, ms = 10000) {
      const fin = Date.now() + ms
      while (Date.now() < fin) {
        if (salida.includes(texto)) return salida
        if (codigo !== null) break
        await esperar(50)
      }
      throw new Error(`no apareció «${texto}» en la salida de \`sh arrancar.sh\`:\n${salida}`)
    },
    async servidor(ruta = '/', ms = 25000) {
      const fin = Date.now() + ms
      while (Date.now() < fin) {
        if (codigo !== null) throw new Error(`\`sh arrancar.sh\` terminó con código ${codigo} antes de responder en ${app.url}:\n${salida}`)
        try {
          await fetch(`${app.url}${ruta}`)
          return app.url
        } catch {
          await esperar(200)
        }
      }
      throw new Error(`\`sh arrancar.sh\` no respondió en ${app.url}${ruta}`)
    },
    async cerrar() {
      if (codigo === null) {
        try {
          process.kill(-hijo.pid, 'SIGTERM')
        } catch {}
        await Promise.race([termino, esperar(5000)])
        if (codigo === null) {
          try {
            process.kill(-hijo.pid, 'SIGKILL')
          } catch {}
        }
      }
      return codigo
    },
    async esperarFin(ms = 5000) {
      await Promise.race([termino, esperar(ms)])
      return codigo
    },
    async reabrir() {
      await app.cerrar()
      return arrancar({ ...opciones, casa, puerto })
    },
  }
  return app
}
