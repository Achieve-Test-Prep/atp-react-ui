import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '../components';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  totalResults: 120,
  resultsPerPage: 10,
};
