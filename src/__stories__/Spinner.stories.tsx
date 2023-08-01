import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from '../components';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'base',
  animate: true,
};
