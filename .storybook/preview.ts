import type { Preview } from '@storybook/react';
import '../style/atp-css-styles.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: 'oklch(0.141 0.005 285.823)' },
        { name: 'Light', value: '#f9fafb' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
