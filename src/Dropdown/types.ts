import { ElementType } from 'react';

import { MenuItemProps, MenuItemsProps, MenuProps } from '@headlessui/react';

import { ButtonProps } from '../Button';

export type DropdownProps = MenuProps<ElementType>;

export type DropdownMenuItemsProps = MenuItemsProps<ElementType> & {
  align?: 'left' | 'right';
};

export type DropdownMenuItemProps = MenuItemProps<ElementType> & {
  buttonProps?: ButtonProps;
};
