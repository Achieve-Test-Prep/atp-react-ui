import customFormsPlugin from '@tailwindcss/forms';
import deepMerge from 'deepmerge';
import twColors from 'tailwindcss/colors';

const colors = {
  primary: {
    dark: '#550700',
    DEFAULT: '#FF4500',
    medium: '#FF8E64',
    light: '#FFE3D9',
    'x-light': '#FFF3EB',
  },
  secondary: {
    dark: '#2D1559',
    DEFAULT: '#9F7DFF',
    medium: '#CBB8FF',
    light: '#DDD1FF',
    'x-light': '#EAE2FF',
  },

  accent: {
    DEFAULT: '#32363B',
    medium: '#414B58',
    light: '#6d6d6d',
    'x-light': '#CECECE',
  },

  info: { DEFAULT: '#3E96E7', 'x-light': '#dcefff' },
  success: { DEFAULT: '#85BC63', medium: '#5f8f41', 'x-light': '#e6f8f1' },
  warning: { DEFAULT: '#FFCB46', dark: '#e6ab12', 'x-light': '#fff5db' },
  error: { DEFAULT: '#FF5353', 'x-light': '#ffeaea' },

  outline: '#D1D5DB',
  avatar: '#b7babc',

  ...twColors,

  gray: {
    ...twColors.gray,
    overlay: '#6D6D6D',
    75: '#E5E5E5',
    50: '#F3F4F6',
    25: '#F9FAFB',
  },
};

const maxHeight = theme => ({
  0: '0',
  xl: '36rem',
  ...theme('spacing'),
});

const atpLibConfig = {
  darkMode: 'class',
  content: {
    files: [
      // 'node_modules/atp-react-ui/lib/defaultTheme.js',
      'node_modules/atp-react-ui/dist/index.js',
    ],
  },
  theme: {
    colors,
    maxHeight,
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },

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
          '67%, 78%': { backgroundColor: '#FF4500' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-min-max': 'scale-min-max 3s ease-in-out infinite',
        shake: 'shake 3000ms ease-in-out infinite',
        'accent-primary': 'accent-primary 3000ms ease-in-out infinite',
      },

      boxShadow: {
        card: '0px 1px 2px rgba(50, 54, 59, 0.05), 0px 2px 4px rgba(50, 54, 59, 0.25)',
        'card-orange':
          '0px 1px 2px rgba(50, 54, 59, 0.05), 0px 2px 4px rgba(50, 54, 59, 0.25)',
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
        serif: [
          'Bitter',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
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

      backgroundImage: {
        slider:
          'linear-gradient(90deg, rgba(241, 88, 16, 0.3) 20%, rgba(255, 185, 80, 0.3) 50%, rgba(99, 153, 11, 0.3) 80%)',
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
  return deepMerge({ ...tailwindConfig, content }, atpLibConfig, {
    arrayMerge: arrayMergeFn,
  });
}

export { wrapper };
export default wrapper;
