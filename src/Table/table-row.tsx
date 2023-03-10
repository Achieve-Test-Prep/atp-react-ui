import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { TableRowProps } from './types';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { className, children, ...other } = props;

  const {
    theme: { tableRow },
  } = useContext(ThemeContext);

  const cls = twMerge(tableRow.base, className);

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  );
});

export default TableRow;
