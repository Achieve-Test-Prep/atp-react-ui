import React, { useContext } from 'react';

import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { ModalHeaderProps } from './types';

export default function ModalHeader(props: ModalHeaderProps) {
  const { className, as = 'div', ...other } = props;
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext);

  const cls = twMerge(modalHeader.base, className);

  return <Dialog.Title as={as} className={cls} {...other} />;
}
