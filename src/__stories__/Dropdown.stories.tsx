import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@animxyz/core';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';
import { useBoolean } from '../hooks/use-boolean';
import { Icon } from '../Icon';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const ref = useRef(null);
  const { isOpen, ...rest } = args;
  const [isOpens, open] = useBoolean(isOpen);

  return (
    <section className="flex flex-col items-center">
      <div className="relative z-10">
        <Button size="xs" ref={ref} onClick={open.toggle}>
          Click to open
        </Button>
        <Dropdown
          {...rest}
          isOpen={isOpens}
          onClose={(e: MouseEvent | KeyboardEvent) => {
            if (e.target !== ref.current) {
              open.setFalse();
            }
          }}
        >
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
