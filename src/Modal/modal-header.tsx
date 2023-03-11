import React, { useContext } from 'react';

import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import { ModalHeaderProps } from './types';

const ModalHeader = React.forwardRef<HTMLParagraphElement, ModalHeaderProps>((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext);

  const cls = twMerge(modalHeader.base, className);

  return (
    <Dialog.Title ref={ref} className={cls} {...other}>
      {children}
    </Dialog.Title>
  );
});

export default ModalHeader;
