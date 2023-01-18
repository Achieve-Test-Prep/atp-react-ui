import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '../Alert';

export default {
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'This is a neutral alert.',
  type: 'neutral',
};

export const WithoutClose = Template.bind({});
WithoutClose.args = {
  type: 'success',
  children: "This alert doesn't have a close button.",
  onClose: undefined,
};
