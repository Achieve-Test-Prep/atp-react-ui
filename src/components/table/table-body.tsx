import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableSectionProps } from './types';

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableBody } = useTheme();

  const cls = twMerge(tableBody.base, className);

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  );
});
