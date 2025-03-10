import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: [
        'src/components',
        'src/hocs',
        'src/hooks',
        'src/utils',
        'src/themes',
        'src/atp-lib.tsx',
        'src/types.ts',
      ],
      exclude: [
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
      ],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WikzUI',
      formats: ['es'], // Only include ES modules format
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name;
        },
      },
    },

    // Ensure CSS is processed
    cssCodeSplit: false,
    assetsInlineLimit: 0, // Add this line to ensure Tailwind styles are properly included
  },
});
