import type { ElementType } from 'react';

import type {
  MenuItemProps,
  MenuItemsProps,
  MenuProps,
  MenuButtonProps,
} from '@headlessui/react';

import type { ButtonProps } from '../button';

export type DropdownProps = MenuProps<ElementType>;

export type DropdownMenuItemsProps = MenuItemsProps<ElementType> & {
  align?: 'left' | 'right';
};

export type DropdownMenuItemProps = MenuItemProps<ElementType> & {
  buttonProps?: ButtonProps;
};

export type DropdownButtonProps = MenuButtonProps<ElementType>;
