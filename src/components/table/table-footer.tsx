import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const TableFooter = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableFooter } = useTheme();

  const cls = twMerge(tableFooter.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});
