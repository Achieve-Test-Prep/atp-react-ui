
import type { Meta, StoryObj } from '@storybook/react-vite';

import avatarImage from './static/avatar-1.jpg';

import { Avatar, AvatarFallback, AvatarImage } from '../components';


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
