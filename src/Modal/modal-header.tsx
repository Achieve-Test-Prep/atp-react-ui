import React, { useContext } from 'react';

import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import { ModalHeaderProps } from './types';

function ModalHeader(props: ModalHeaderProps) {
  const { className, ...other } = props;
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext);

  const cls = twMerge(modalHeader.base, className);

  return <Dialog.Title className={cls} {...other} />;
}

export default ModalHeader;
