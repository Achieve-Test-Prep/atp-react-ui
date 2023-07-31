import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { TableRowProps } from './types';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableRow } = useTheme();

  const cls = twMerge(tableRow.base, className);

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  );
});

export default TableRow;
