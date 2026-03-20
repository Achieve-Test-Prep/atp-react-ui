import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const externalPackages = [
  '@headlessui/react',
  '@radix-ui/react-avatar',
  '@radix-ui/react-dialog',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-slider',
  'react',
  'react-dom',
  'react-hook-form',
  'tailwind-merge',
  'tw-animate-css',
];

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AtpReactUI',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) =>
        externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`)),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
