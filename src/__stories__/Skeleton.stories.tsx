import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from '../components';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  className: '',
};
