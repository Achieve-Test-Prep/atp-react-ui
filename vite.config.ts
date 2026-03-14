import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const libraryBuildExcludes = [
  '.storybook/**/*',
  'src/**/__stories__/**/*',
  'src/**/*.stories.ts',
  'src/**/*.stories.tsx',
  'src/**/*.test.ts',
  'src/**/*.test.tsx',
];

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      exclude: libraryBuildExcludes,
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      outDir: 'dist',
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AtpReactUI',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
