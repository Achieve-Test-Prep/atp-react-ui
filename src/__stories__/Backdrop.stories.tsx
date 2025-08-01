import type { Meta, StoryObj } from '@storybook/react-vite';

import { Backdrop } from '../components';

const meta = {
  title: 'Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
