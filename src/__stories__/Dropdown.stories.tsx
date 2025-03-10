import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownItems,
} from '../components';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  render: () => (
    <section className="flex flex-col items-center">
      <div className="relative z-10">
        <Dropdown>
          {() => (
            <>
              <DropdownButton>Test Button</DropdownButton>

              <DropdownItems>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>Lorem Ipsum</DropdownItem>
                <DropdownItem>
                  {() => <Button as="dropdownItem">Lorem Ipsum</Button>}
                </DropdownItem>
              </DropdownItems>
            </>
          )}
        </Dropdown>
      </div>
    </section>
  ),
};
