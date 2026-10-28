// Fijación del catálogo de Arketum: no se edita. La suite e2e se corre desde la
// raíz del artefacto con:
//   npx vitest run --config arketum/fijaciones/e2e/vitest.config.mjs
// Solo las pruebas de `src/e2e/`, que arrancan el artefacto con `app.mjs`.
export default {
  root: process.cwd(),
  test: {
    include: ['src/e2e/**/*.test.ts'],
    testTimeout: 60000,
    hookTimeout: 60000,
  },
}
