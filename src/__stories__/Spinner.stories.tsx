import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../components';

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {
    size: 'base',
    animate: true,
  },
};
