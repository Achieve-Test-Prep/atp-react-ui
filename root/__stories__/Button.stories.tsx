import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  as: 'primary',
  size: 'base',
  showLoader: false,
  'aria-label': 'test btn',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Icon',
  as: 'primary',
  size: 'base',
  icon: 'AcademicCapIcon',
  'aria-label': 'test btn with icon',
};
