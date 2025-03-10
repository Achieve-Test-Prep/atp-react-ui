import React from 'react';

import { MenuItems } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes/use-theme';

import type { DropdownMenuItemsProps } from './types';

export const DropdownItems: React.ForwardRefExoticComponent<
  DropdownMenuItemsProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, DropdownMenuItemsProps>((props, ref) => {
  const { className, as = 'ul', align = 'right', ...rest } = props;

  const { dropdown } = useTheme();
  const cls = twMerge(dropdown.base, dropdown.align[align], className);

  return <MenuItems transition as={as} ref={ref} {...rest} className={cls} />;
});
