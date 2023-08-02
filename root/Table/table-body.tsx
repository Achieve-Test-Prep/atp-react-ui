import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { TableSectionProps } from './types';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableBody } = useTheme();

  const cls = twMerge(tableBody.base, className);

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

export default TableBody;
