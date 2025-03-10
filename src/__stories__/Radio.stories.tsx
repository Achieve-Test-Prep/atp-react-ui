import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioItem, RadioItemsGroup } from '../components';

const meta = {
  title: 'RadioItem',
  component: RadioItem,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioItem>;

export default meta;

type Story = StoryObj<typeof RadioItem>;

export const Primary: Story = {
  render: () => (
    <RadioItemsGroup>
      {' '}
      <RadioItem value="" />
    </RadioItemsGroup>
  ),
};
