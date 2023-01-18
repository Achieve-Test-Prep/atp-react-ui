import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card, CardBody } from '../Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardBody>{args.children}</CardBody>
  </Card>
);

// TODO: Add composed examples with CardBody
export const Basic = Template.bind({});
Basic.args = {
  children: 'Hello',
};

export const Colored = Template.bind({});
Colored.args = {
  children: 'Hello',
  colored: true,
  className: 'bg-red-200',
};
