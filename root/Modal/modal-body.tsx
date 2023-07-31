import React from 'react';

import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { ModalBodyProps } from './types';

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { children, className, as = 'div', ...other } = props;
  const { modalBody } = useTheme();

  // TODO: this className should be check
  const cls = twMerge(modalBody.base, className as string);

  return (
    <Dialog.Description as={as} className={cls} ref={ref} {...other}>
      {children}
    </Dialog.Description>
  );
});

export default ModalBody;
