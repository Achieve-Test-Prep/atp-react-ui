import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelperText } from '../components';

export default {
  title: 'HelperText',
  component: HelperText,
} as ComponentMeta<typeof HelperText>;

const Template: ComponentStory<typeof HelperText> = (args) => <HelperText {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Helper text used with inputs.',
  valid: undefined,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  children: 'Helper text used with inputs.',
  valid: true,
};
