import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { TableCellProps } from './types';
import { ThemeContext } from '../themes/theme-context';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(props, ref) {
  const { className, children, ...other } = props;

  const {
    theme: { tableCell },
  } = useContext(ThemeContext);

  const cls = twMerge(tableCell.base, className);

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  );
});

export default TableCell;
