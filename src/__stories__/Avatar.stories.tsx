import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '../components';

import avatarImage from './static/avatar-1.jpg';

const meta = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={avatarImage} alt={'John Doe'} />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
    </Avatar>
  ),
};
