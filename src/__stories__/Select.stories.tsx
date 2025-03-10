import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '../components';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

function BasicSelectOptions() {
  return (
    <>
      <option>Banana</option>
      <option>Apple</option>
      <option>Orange</option>
    </>
  );
}

function MultiSelectOptions() {
  return (
    <>
      <option>Banana</option>
      <option>Apple</option>
      <option>Orange</option>
    </>
  );
}

export const Basic: Story = {
  args: {
    children: <BasicSelectOptions />,
    disabled: false,
  },
};

export const MultiSelect: Story = {
  args: {
    children: <MultiSelectOptions />,
    multiple: true,
    disabled: false,
  },
};
