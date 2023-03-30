import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const TableFooter = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;

  const {
    theme: { tableFooter },
  } = useContext(ThemeContext);

  const cls = twMerge(tableFooter.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default TableFooter;
