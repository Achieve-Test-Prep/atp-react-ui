import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { ModalHeaderProps } from './types';

export default function ModalHeader(props: ModalHeaderProps) {
  const { className, as = 'div', ...other } = props;
  const { modalHeader } = useTheme();

  const cls = twMerge(modalHeader.base, className);

  return <Dialog.Title as={as} className={cls} {...other} />;
}
