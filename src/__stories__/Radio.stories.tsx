import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioItem, RadioItemsGroup } from '../components/form-components/radio';

const meta: Meta<typeof RadioItem> = {
  component: RadioItem,
};

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
