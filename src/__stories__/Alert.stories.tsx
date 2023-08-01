import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../components';

const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'This is a neutral alert.',
    type: 'neutral',
  },
};
