import React, { ReactElement, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown, DropdownButton, DropdownItem, DropdownItems } from '../Dropdown';
import { useBoolean } from '../hooks/use-boolean';
import { Menu } from '@headlessui/react';
import { Button } from '../Button';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const ref = useRef(null);
  const { ...rest } = args;

  return (
    <section className="flex flex-col items-center">
      <div className="relative z-10">
        <Dropdown>
          {({ open }) => (
            <>
              <DropdownButton>Test Button</DropdownButton>

              <DropdownItems>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>{(prop) => <Button as="__dropdownItem">Lorem Ipsum</Button>}</DropdownItem>
              </DropdownItems>
            </>
          )}
        </Dropdown>
      </div>
    </section>
  );
};

export const Basic = Template.bind({});
