#!/usr/bin/env node
// Hook de inicio de sesión del plugin de Arketum: en un proyecto con `.arketum/proyecto.yaml`, deja
// corriendo el panel de la máquina (o usa el que corre) y pone su dirección en el contexto del agente.
// En cualquier otra carpeta no hace nada.
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

let entrada = {}
try {
  entrada = JSON.parse(readFileSync(0, 'utf8') || '{}')
} catch {}
const proyecto = process.env.CLAUDE_PROJECT_DIR || entrada.cwd || process.cwd()
if (!existsSync(join(proyecto, '.arketum', 'proyecto.yaml'))) process.exit(0)

const raizDelPlugin = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const r = spawnSync(process.execPath, [join(raizDelPlugin, 'dist/mcp/panel-cli.js'), proyecto], { encoding: 'utf8', timeout: 25000 })
const url = /http:\/\/127\.0\.0\.1:\d+\/\?t=[0-9a-f]+/.exec(r.stdout || '')?.[0]
const contexto = url
  ? `Arketum: el panel de estado de este proyecto ya está corriendo en ${url} — dale esa dirección a la persona al comenzar (ahí ve el estado y decide sus pendientes). No hace falta \`action: panel\`.`
  : `Arketum: no se pudo levantar el panel de este proyecto al iniciar la sesión (${(r.stderr || r.error?.message || 'sin salida').trim()}). Pide \`action: panel\` a la herramienta \`build\` y sigue lo que diga.`
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: contexto } }))
