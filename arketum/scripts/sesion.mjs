#!/usr/bin/env node
// Session start hook of the Arketum plugin: in a project with `.arketum/project.yaml` (store format 2) or
// `.arketum/proyecto.yaml` (format 1), it leaves the machine's
// panel running (or uses the one that runs) and puts its address in the agent's context. In any other folder it
// does nothing. It speaks English, the installation's language.
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

let input = {}
try {
  input = JSON.parse(readFileSync(0, 'utf8') || '{}')
} catch {}
const project = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd()
if (!['project.yaml', 'proyecto.yaml'].some((f) => existsSync(join(project, '.arketum', f)))) process.exit(0)

const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const r = spawnSync(process.execPath, [join(pluginRoot, 'dist/mcp/panel-cli.js'), project], { encoding: 'utf8', timeout: 25000 })
const url = /http:\/\/127\.0\.0\.1:\d+\/\?t=[0-9a-f]+/.exec(r.stdout || '')?.[0]
const context = url
  ? `Arketum: this project's status panel is already running at ${url} — give the person that address when starting (there they see the overview and decide their pending items). \`action: panel\` is not needed.`
  : `Arketum: the panel of this project could not be started when the session began (${(r.stderr || r.error?.message || 'no output').trim()}). Ask the \`build\` tool for \`action: panel\` and follow what it says.`
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context } }))
