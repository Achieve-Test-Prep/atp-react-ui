import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../components';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  args: {},
  render: args => <Table {...args} />,
};
