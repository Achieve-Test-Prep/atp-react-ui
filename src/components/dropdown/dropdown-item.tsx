import { MenuItem } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { DropdownMenuItemProps } from './types';

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
