---
name: arketum
description: Cómo trabajar en un proyecto gobernado por Arketum (con carpeta .arketum/) o empezar uno nuevo con Arketum. Úsala al comenzar a trabajar en un proyecto así, al abrir o retomar unidades de trabajo, o cuando la persona pida su estado, sus pendientes o el panel.
---

# Trabajar con Arketum

Arketum gobierna el proyecto a través de una sola herramienta MCP, `build` (servidor `arketum` de este plugin). Lo que hay que hacer en cada momento lo dice la propia herramienta: cada respuesta termina con una **guía** y su **acción siguiente** va primero. Síguela.

- **Al comenzar.** Llama a `build` con `root` (la carpeta del proyecto, ruta absoluta) y sin `action`: trae el estado del proyecto (o el arranque, si aún no tiene `.arketum/`). Dale a la persona la dirección del panel: si el inicio de sesión ya la puso en tu contexto, esa; si no, pídela con `action: panel`.
- **El trabajo va en unidades** (`action: open`, con carril, objetivo y artefactos que toca); cada paso se entrega con `action: submit`.
- **Los gates los decide la persona.** Si tu cliente no le muestra el formulario, preséntale el resumen tal cual, pregúntale en el chat y transmite lo que dijo con `action: decide`. Nunca decidas tú. También puede decidir en el panel o en `.arketum/decisiones-pendientes.md` (`action: tanda`).
- **No edites `.arketum/` a mano**: lo escribe Arketum. Tú escribes el código del proyecto y los documentos de trabajo que te pide cada paso.
- **Arketum no ejecuta nada**: las pruebas y los comandos los corres tú y entregas su evidencia.
