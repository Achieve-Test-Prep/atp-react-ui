import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../Avatar';
import avatarImage from './static/avatar-1.jpg';

const meta = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'lg',
    src: avatarImage,
    alt: 'Profile image',
  },
};
