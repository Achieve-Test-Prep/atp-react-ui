import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../Avatar';
import avatarImage from './static/avatar-1.jpg';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'lg',
  src: avatarImage,
  alt: 'Profile image',
};
