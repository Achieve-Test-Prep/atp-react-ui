import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { TableSectionProps } from './types';
import { ThemeContext } from '../themes/theme-context';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(function TableBody(props, ref) {
  const { className, children, ...other } = props;

  const {
    theme: { tableBody },
  } = useContext(ThemeContext);

  const cls = twMerge(tableBody.base, className);

  return (
    <tbody className={cls} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

export default TableBody;
