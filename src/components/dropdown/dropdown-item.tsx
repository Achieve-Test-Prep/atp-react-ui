import { MenuItem } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { DropdownMenuItemProps } from './types';

import { useTheme } from '../../themes';

export function DropdownItem(props: DropdownMenuItemProps) {
  const { className, as = 'li', ...res } = props;

  const { dropdownItem } = useTheme();

  return (
    <MenuItem
      as={as}
      {...res}
      className={twMerge(dropdownItem.base, className)}
    />
  );
}
