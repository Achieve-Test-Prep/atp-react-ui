import React from 'react';

import { Description } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { ModalBodyProps } from './types';

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    const { children, className, as = 'div', ...other } = props;
    const { modalBody } = useTheme();

    // TODO: this className should be check
    const cls = twMerge(modalBody.base, className as string);

    return (
      <Description as={as} className={cls} ref={ref} {...other}>
        {children}
      </Description>
    );
  }
);
