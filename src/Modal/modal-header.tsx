import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const ModalHeader = React.forwardRef<HTMLParagraphElement, DivProps>(function ModalHeader(props, ref) {
  const { children, className, ...other } = props;
  const {
    theme: { modalHeader },
  } = useContext(ThemeContext);

  const cls = twMerge(modalHeader.base, className);

  return (
    <p className={cls} ref={ref} {...other}>
      {children}
    </p>
  );
});

export default ModalHeader;
