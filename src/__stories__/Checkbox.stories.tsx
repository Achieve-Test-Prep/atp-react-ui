import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox, Label } from '../components';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  render: () => <Checkbox />,
};

export const CheckboxWithLabel: Story = {
  render: () => (
    <div className="flex flex-row items-center justify-start space-y-0 space-x-3">
      <Checkbox />
      <Label className="cursor-pointer">This is label</Label>
    </div>
  ),
};
