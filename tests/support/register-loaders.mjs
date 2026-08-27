// Registers the image-stub module hook for the Node test runner.
// Loaded via `tsx --import ./tests/support/register-loaders.mjs`.
import { register } from 'node:module'

// Set here (instead of the `test` script) so it applies cross-platform, before any test file imports `env.ts`.
process.env.NODE_ENV = 'test'

register('./image-loader.mjs', import.meta.url)
