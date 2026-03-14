import type { Preview } from '@storybook/react-vite';
import '../style/atp-css-styles.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: // 👇 Default values
        { name: 'Dark', value: 'oklch(0.141 0.005 285.823)' },

        light: { name: 'Light', value: '#f9fafb' }
      }
    },
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
