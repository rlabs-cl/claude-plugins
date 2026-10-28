# Arketum 1.1.0 — Claude Code plugin

Arketum guides an agent through a verified lifecycle for building software: each piece of work is a unit with a lane (new project, feature, small fix, deployment…), the steps that need your decision stop at a gate you answer, every change is tied to a requirement, and nothing closes without its evidence. Arketum does not write your code and does not make your decisions: it tells the agent what comes next, checks what the agent hands in, and records what you decided.

Requirements: Claude Code and Node.js 20 or later.

## What runs on your machine

- **The MCP server** (`build` tool): started by Claude Code with `node` from this plugin's folder (`dist/mcp/arketum.js`), over stdio.
- **A SessionStart hook** (`scripts/sesion.mjs`): in a project that has `.arketum/project.yaml` (`proyecto.yaml` in a store from an earlier format), it starts the local status panel (one per machine, on `http://127.0.0.1:4747`) or reuses the one already running, and gives the agent the project's address. In any other folder it does nothing.
- **A skill and three commands**: `/arketum:overview` (where everything stands), `/arketum:panel` (open the panel) and `/arketum:batch` (everything waiting for you, in one place).

## What it sends

Only if you accept: an anonymous usage summary, at most once a day. The first time you use Arketum, it asks you itself with a yes/no form (or your agent asks you in the chat, if your client can't show forms); your answer takes effect right away, with no commands to run. Until you decide, the question waits among your pending items (in `/arketum:batch`, the panel and `/arketum:overview`); without an answer, or with a no, nothing is counted or sent. Once you decide, it is never asked again. The summary says the Arketum version, how it was installed, the operating system family, the name your MCP client declares, how many projects and days it was used and, per project (identified only by a hash that cannot be reversed), its units per lane, its gates per channel with how long they waited for you, and how many topics are open and closed. It never carries any text (requirements, PRDs, topics, comments or your quoted words), any path, any project, unit or person name, or any code, and it asks the receiving service not to derive your location from the connection and not to build a person profile. Ask your agent to show you exactly what would be sent, or tell it you no longer accept it to stop it; `ARKETUM_TELEMETRIA=0` also turns it off on this machine whatever was decided. With the npm package installed (`npm install -g @rlabs-cl/arketum`), `arketum telemetry` also prints exactly what would be sent, `--accept` and `--no` decide, and `--test` sends one test event and tells you whether it arrived.

Besides that, once a day Arketum checks this marketplace for a newer version of the plugin, with a plain GET that sends nothing else, and only tells your agent if there is one, with how to update; it never installs anything, and the same `ARKETUM_TELEMETRIA=0` turns it off.

Everything else stays on your machine: the server only reads and writes files in your project's `.arketum/` folder and in `~/.arketum/`, and the panel listens only on `127.0.0.1`; the panel page talks only to that same local address. Everything Arketum remembers is plain text in `.arketum/`, which you can version with the rest of your project.

## Install

From the marketplace:

```
/plugin marketplace add rlabs-cl/claude-plugins
/plugin install arketum@rlabs
```

From the zip: unzip `arketum-plugin-1.1.0.zip` somewhere you will keep it (the plugin is installed from there), then:

```
/plugin marketplace add <path>/arketum-plugin
/plugin install arketum@rlabs
```

Restart the Claude Code session afterwards. To try it without installing: `claude --plugin-dir <path>/arketum-plugin/arketum`. Where a plugin is uploaded as a single file, use `arketum-1.1.0.plugin.zip`: the same plugin, with its manifest at the root.

If you had registered Arketum by hand as an MCP server, remove it so there are not two: `claude mcp remove arketum -s user`.

## First steps

1. Open Claude Code in your project folder: an empty one to start something new, or an existing project.
2. Ask for what you want, for example: "Use Arketum to start a project: I want …", or in an existing one, "Use Arketum to take over this project and then add …".
3. The agent will ask questions to understand what you want and will ask for your approval at specific points: the PRD (what gets built), the architecture and, at the end, whether what was built is what you wanted.

Arketum speaks Spanish or English: each project chooses its language when it starts, and everything you and the agent see in that project is in that language.

## Update

With the marketplace: `/plugin marketplace update rlabs` and `/plugin update arketum@rlabs`. The running panel restarts with the new version the next time it is started.

## License

Arketum is proprietary software of rlabs-cl, governed by `LICENSE`. The third-party dependencies bundled in `dist/` are each governed by their own license, with their notices in `THIRD-PARTY-NOTICES`.
