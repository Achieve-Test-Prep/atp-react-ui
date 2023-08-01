import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';
import type { DivProps } from '../types';

const TableFooter = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableFooter } = useTheme();

  const cls = twMerge(tableFooter.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default TableFooter;
