import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../components';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

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

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <BasicSelectOptions />,
  disabled: false,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  children: <MultiSelectOptions />,
  multiple: true,
  disabled: false,
};
