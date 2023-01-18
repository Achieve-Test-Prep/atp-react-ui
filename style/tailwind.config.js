const atpLib = require('../config');

module.exports = atpLib({
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
