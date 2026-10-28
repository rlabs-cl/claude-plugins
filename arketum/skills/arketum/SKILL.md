---
name: arketum
description: How to work in a project governed by Arketum (with an .arketum/ folder) or start a new one with Arketum. Use it when starting work in such a project, when opening or resuming work units, or when the person asks for its overview, their pending items or the panel.
---

# Working with Arketum

Arketum governs the project through a single MCP tool, `build` (the `arketum` server of this plugin). What to do at each moment is said by the tool itself: every answer ends with a **guide** and its **next action** comes first. Follow it.

- **When starting.** Call `build` with `root` (the project's folder, absolute path) and no `action`: it brings the project's overview (or the bootstrap, if it has no `.arketum/` yet). Give the person the panel's address: if the session start already put it in your context, that one; if not, ask for it with `action: panel`.
- **Work goes in units** (`action: open`, with lane, objective and the artifacts it touches); each step is submitted with `action: submit`.
- **The person decides the gates.** If your client does not show them the form, present the summary as is, ask them in the chat and relay what they said with `action: decide`. Never decide yourself. They can also decide in the panel or in `.arketum/pending-decisions.md` (`action: batch`; `decisiones-pendientes.md` in a store from an earlier format).
- **Do not edit `.arketum/` by hand**: Arketum writes it. You write the project's code and the working documents each step asks for.
- **Arketum runs nothing**: you run the tests and the commands and submit their evidence.
- **Each project speaks its own language** (Spanish or English): what Arketum writes for a project comes out in that project's language; tool names are the same in both.
