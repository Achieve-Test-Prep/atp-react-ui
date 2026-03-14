import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from '../components';

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  args: {
    className: '',
  },
};
