import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../Typography';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic label',
};
