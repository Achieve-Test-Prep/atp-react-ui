import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'badge text',
    type: 'neutral',
    as: 'base',
    size: 'base',
  },
};
