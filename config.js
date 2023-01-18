const deepMerge = require('deepmerge');
const twColors = require('tailwindcss/colors');
const customFormsPlugin = require('@tailwindcss/forms');

const colors = {
  primary: { DEFAULT: '#FF6000', medium: '#FFA06A', light: '#FFDBC4', 'x-light': '#FFF3EB' },
  secondary: { DEFAULT: '#924AAF', medium: '#C479E1', light: '#F8AAFF', 'x-light': '#FFDDFF' },
  accent: { DEFAULT: '#32363B', medium: '#414B58', light: '#6d6d6d', 'x-light': '#CECECE' },
  // neutral: '',

  info: { DEFAULT: '#3E96E7', 'x-light': '#dcefff' },
  success: { DEFAULT: '#85BC63', medium: '#5f8f41', 'x-light': '#e6f8f1' },
  warning: { dark: '#e6ab12', DEFAULT: '#FFDC81', 'x-light': '#fff5db' },
  error: { DEFAULT: '#FF5353', 'x-light': '#ffeaea' },

  outline: '#D1D5DB',
  avatar: '#b7babc',

  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',

  ...twColors,

  gray: { ...twColors.gray, overlay: '#6D6D6D', 75: '#E5E5E5', 50: '#F3F4F6', 25: '#F9FAFB' },
};

const maxHeight = (theme) => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
});

const atpLibConfig = {
  darkMode: 'class',
  content: {
    files: ['node_modules/atp-react-ui/lib/defaultTheme.js', 'node_modules/atp-react-ui/dist/index.js'],
  },
  theme: {
    colors,
    maxHeight,
    extend: {
      keyframes: {
        'scale-min-max': {
          '0%, 100%': { transform: 'scale(0.5)' },
          '30%, 50%, 70%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 66%, 79%, 100%': { transform: 'translateX(0)' },
          '68%, 72%, 75%, 77%': { transform: 'translateX(-3px)' },
          '70%, 74%, 76%, 78%': { transform: 'translateX(3px)' },
        },
        'accent-primary': {
          '0%, 45%, 100%': { backgroundColor: '#32363B' },
          '67%, 78%': { backgroundColor: '#FF6000' },
        },
      },

      animation: {
        'scale-min-max': 'scale-min-max 3s ease-in-out infinite',
        shake: 'shake 3000ms ease-in-out infinite',
        'accent-primary': 'accent-primary 3000ms ease-in-out infinite',
      },

      boxShadow: {
        card: '0px 1px 2px rgba(50, 54, 59, 0.05), 0px 2px 4px rgba(50, 54, 59, 0.25)',
        'card-orange': '0px 1px 2px rgba(50, 54, 59, 0.05), 0px 2px 4px rgba(50, 54, 59, 0.25)',
      },

      fontFamily: {
        sans: [
          "'IBM Plex Sans'",
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Bitter', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [customFormsPlugin],
};

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return [...acc, cur];
  }, []);
}

/**
 * Merge AtpLib and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  let content;
  if (Array.isArray(tailwindConfig.content)) {
    content = {
      files: tailwindConfig.content,
    };
  } else {
    content = tailwindConfig.content;
  }
  return deepMerge({ ...tailwindConfig, content }, atpLibConfig, { arrayMerge: arrayMergeFn });
}

module.exports = wrapper;
