import React, { PropsWithChildren, useContext } from 'react';

import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { Button, ButtonProps } from '../Button';
import { ThemeContext } from '../themes/theme-context';

import { DropdownMenuItemProps } from './types';

const DropdownItem = React.forwardRef<HTMLDivElement, PropsWithChildren<DropdownMenuItemProps>>((props, ref) => {
  const { children, className, as = 'li', buttonProps, ...other } = props;
  const { as: btnAs = '__dropdownItem', className: btnClassName, ...res } = (buttonProps || {}) as ButtonProps;

  const {
    theme: { dropdownItem },
  } = useContext(ThemeContext);

  return (
    <Menu.Item as={as} ref={ref} {...other} className={twMerge(dropdownItem.base, className)}>
      {({ active }) => (
        <Button
          as={btnAs}
          className={twMerge(btnClassName, active ? 'hover:bg-primary-x-light hover:text-primary' : '')}
          {...res}
        >
          {children}
        </Button>
      )}
    </Menu.Item>
  );
});

export default DropdownItem;
