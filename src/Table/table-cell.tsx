import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { TableCellProps } from './types';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
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
