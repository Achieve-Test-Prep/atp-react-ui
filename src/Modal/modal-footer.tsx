import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const ModalFooter = React.forwardRef<HTMLElement, DivProps>((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: { modalFooter },
  } = useContext(ThemeContext);

  const cls = twMerge(modalFooter.base, className);

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  );
});

export default ModalFooter;
