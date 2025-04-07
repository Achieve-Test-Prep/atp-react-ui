import { Description } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { ModalBodyProps } from './types';

export const ModalBody = ({
  children,
  className,
  as = 'div',
  ...other
}: ModalBodyProps) => {
  const { modalBody } = useTheme();

  // TODO: this className should be check
  const cls = twMerge(modalBody.base, className as string);

  return (
    <Description as={as} className={cls} {...other}>
      {children}
    </Description>
  );
};
