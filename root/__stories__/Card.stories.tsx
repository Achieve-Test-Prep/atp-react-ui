import React from 'react';

import { Card, CardBody } from '../Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'This is a string child',
  },
};

export const ChildrenInCardBody: Story = {
  render: () => (
    <Card>
      <CardBody>This is node child</CardBody>
    </Card>
  ),
};
