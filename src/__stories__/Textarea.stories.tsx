import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from '../components';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {},
  render: args => <Textarea {...args} />,
};
