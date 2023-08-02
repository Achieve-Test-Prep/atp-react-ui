import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Dropdown, DropdownButton, DropdownItem, DropdownItems } from '../components';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => (
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

export const Basic = Template.bind({});
