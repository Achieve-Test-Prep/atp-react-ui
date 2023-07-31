import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { TableCellProps } from './types';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableCell } = useTheme();

  const cls = twMerge(tableCell.base, className);

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  );
});

export default TableCell;
