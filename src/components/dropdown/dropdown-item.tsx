import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes/use-theme';

import type { DropdownMenuItemProps } from './types';

export function DropdownItem(props: DropdownMenuItemProps) {
  const { className, as = 'li', ...res } = props;

  const { dropdownItem } = useTheme();

  return <Menu.Item as={as} {...res} className={twMerge(dropdownItem.base, className)} />;
}
