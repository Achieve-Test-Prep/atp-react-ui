const atpLib = require('../config');

module.exports = atpLib({
  content: ['./root/**/*.{html,js,ts,tsx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
});
