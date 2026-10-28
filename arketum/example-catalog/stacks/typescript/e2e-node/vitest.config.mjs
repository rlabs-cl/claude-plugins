// A fixture of the Arketum catalog: never edited. The e2e suite runs from the
// root of the artifact with:
//   npx vitest run --config arketum/fixtures/e2e/vitest.config.mjs
// Only the tests in `src/e2e/`, which start the artifact with `app.mjs`.
export default {
  root: process.cwd(),
  test: {
    include: ['src/e2e/**/*.test.ts'],
    testTimeout: 60000,
    hookTimeout: 60000,
  },
}
