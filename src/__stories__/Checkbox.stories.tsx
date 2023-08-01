import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../components/form-components/checkbox';
import Label from '../components/Typography/label';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  render: () => <Checkbox />,
};

export const CheckboxWithLabel: Story = {
  render: () => (
    <div className="flex flex-row items-center justify-start space-x-3 space-y-0">
      <Checkbox />
      <Label className="cursor-pointer">This is label</Label>
    </div>
  ),
};
