import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
