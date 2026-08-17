import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const reactExternals = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-dom/client',
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      outDirs: ['dist'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'AtpReactUI',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) =>
        reactExternals.includes(id) ||
        id.startsWith('react/') ||
        id.startsWith('react-dom/'),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
