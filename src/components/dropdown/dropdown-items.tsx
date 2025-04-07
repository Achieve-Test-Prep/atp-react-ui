import { MenuItems } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes/use-theme';

import type { DropdownMenuItemsProps } from './types';

export const DropdownItems = ({
  className,
  as = 'ul',
  align = 'right',
  ...rest
}: DropdownMenuItemsProps) => {
  const { dropdown } = useTheme();
  const cls = twMerge(dropdown.base, dropdown.align[align], className);

  return (
    <MenuItems
      transition
      as={as}
      {...rest}
      className={twMerge(
        'origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        cls
      )}
    />
  );
};
