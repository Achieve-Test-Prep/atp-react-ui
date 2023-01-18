import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Backdrop } from '../Backdrop';

export default {
  title: 'Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Basic = Template.bind({});
