import { wrapper } from './config.js';

/** @type {import('tailwindcss').Config} */
export default wrapper({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/preview.ts',
  ],
  darkMode: ['class', "[data-mode='dark']"],
  theme: {
    extend: {},
  },
  plugins: [],
});
