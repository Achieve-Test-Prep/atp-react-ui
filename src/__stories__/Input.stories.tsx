import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../components/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  value: 'This is the text',
  className: '',
};
