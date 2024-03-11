/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/styles',
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    })
  ],
  build: {
    lib: {
      entry: 'index.scss',
      name: 'styles',
      fileName: 'index',
      formats: [
        'es',
        'cjs'
      ],
    },
    minify: false,
    rollupOptions: {
      external: []
    }
  },
  publicDir: 'styles'
});
