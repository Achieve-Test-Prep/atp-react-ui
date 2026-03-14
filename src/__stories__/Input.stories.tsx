import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../components';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    value: 'This is the text',
    className: '',
  },
};
