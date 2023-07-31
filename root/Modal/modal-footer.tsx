import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';
import type { DivProps } from '../types';

const ModalFooter = React.forwardRef<HTMLElement, DivProps>((props, ref) => {
  const { children, className, ...other } = props;
  const { modalFooter } = useTheme();

  const cls = twMerge(modalFooter.base, className);

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  );
});

export default ModalFooter;
