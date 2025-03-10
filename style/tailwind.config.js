import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

import atpLib from '../config';

export default atpLib({
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {},
  plugins: [
    typography,
    forms({
      strategy: 'class',
    }),
    aspectRatio,
  ],
});
