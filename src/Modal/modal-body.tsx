import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const ModalBody = React.forwardRef<HTMLDivElement, DivProps>(function ModalBody(props, ref) {
  const { children, className, ...other } = props;
  const {
    theme: { modalBody },
  } = useContext(ThemeContext);

  const cls = twMerge(modalBody.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default ModalBody;
