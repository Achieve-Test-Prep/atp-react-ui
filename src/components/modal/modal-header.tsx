import { DialogTitle } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { ModalHeaderProps } from './types';

export function ModalHeader(props: ModalHeaderProps) {
  const { className, as = 'div', ...other } = props;
  const { modalHeader } = useTheme();

  const cls = twMerge(modalHeader.base, className);

  return <DialogTitle as={as} className={cls} {...other} />;
}
