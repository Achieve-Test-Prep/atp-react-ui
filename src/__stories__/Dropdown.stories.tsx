import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@animxyz/core';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';
import { useBoolean } from '../hooks/use-boolean';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const { isOpen, ...rest } = args;
  const [isOpens, open] = useBoolean(isOpen);
  return (
    <section className="flex justify-center">
      <div className="relative">
        <Button size="xs" onClick={open.toggle}>
          Click to open
        </Button>
        <Dropdown {...rest} isOpen={isOpens}>
          <DropdownItem>Hello 1</DropdownItem>
          <DropdownItem>Hello 2</DropdownItem>
          <DropdownItem>Hello 3</DropdownItem>
          <DropdownItem>Hello 4</DropdownItem>
        </Dropdown>
      </div>
    </section>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
};
