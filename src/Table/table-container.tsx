import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import type { DivProps } from '../types';

const TableContainer = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;

  const {
    theme: { tableContainer },
  } = useContext(ThemeContext);

  const cls = twMerge(tableContainer.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default TableContainer;
