import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown, DropdownButton, DropdownItem, DropdownItems } from '../Dropdown';
import { useBoolean } from '../hooks/use-boolean';
import { Icon } from '../Icon';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const ref = useRef(null);
  const { ...rest } = args;
  const [isOpens, open] = useBoolean();

  return (
    <section className="flex flex-col items-center">
      <div className="relative z-10">
        <Dropdown>
          <div>
            <DropdownButton className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Options
            </DropdownButton>
          </div>

          <DropdownItems>
            <div className="px-1 py-1 ">
              <DropdownItem buttonProps={{ tag: 'a', href: 'test' }}>Test</DropdownItem>
            </div>

            <div className="px-1 py-1">
              <DropdownItem>Delete</DropdownItem>
            </div>
          </DropdownItems>
        </Dropdown>
      </div>
    </section>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
};
