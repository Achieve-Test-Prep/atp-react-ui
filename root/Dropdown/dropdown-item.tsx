import React, { useContext } from 'react';

import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import { DropdownMenuItemProps } from './types';

export default function DropdownItem(props: DropdownMenuItemProps) {
  const { className, as = 'li', ...res } = props;

  const {
    theme: { dropdownItem },
  } = useContext(ThemeContext);

  return <Menu.Item as={as} {...res} className={twMerge(dropdownItem.base, className)} />;
}
