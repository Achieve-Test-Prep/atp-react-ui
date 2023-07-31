import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { DropdownMenuItemsProps } from './types';

const DropdownItems = React.forwardRef<HTMLDivElement, DropdownMenuItemsProps>((props, ref) => {
  const { className, as = 'ul', align = 'right', ...rest } = props;

  const { dropdown } = useTheme();
  const cls = twMerge(dropdown.base, dropdown.align[align], className);

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items as={as} ref={ref} {...rest} className={cls} />
    </Transition>
  );
});

export default DropdownItems;
