import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <>
    <Button>Click to open</Button>
    <Dropdown {...args}>
      <DropdownItem>Hello</DropdownItem>
    </Dropdown>
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  onClose: () => {},
  isOpen: false,
};
