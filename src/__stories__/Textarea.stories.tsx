import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../components';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Basic = Template.bind({});
