import type { Meta, StoryObj } from '@storybook/react-vite';

import { HelperText } from '../components';

const meta: Meta<typeof HelperText> = {
  title: 'HelperText',
  component: HelperText,
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const Basic: Story = {
  args: {
    children: 'Helper text used with inputs.',
    valid: undefined,
  },
};

export const WithValidation: Story = {
  args: {
    children: 'Helper text used with inputs.',
    valid: true,
  },
};
