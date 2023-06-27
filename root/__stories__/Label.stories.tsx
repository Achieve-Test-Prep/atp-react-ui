import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../Typography';
import React from 'react';

const meta = {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StringChild: Story = {
  args: {
    children: 'This is a string child'
  },
};

export const NodeChild: Story = {
  render: () => <>This is node child</>
};