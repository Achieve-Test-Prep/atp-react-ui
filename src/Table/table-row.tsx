import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { TableRowProps } from './types';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(props, ref) {
  const { className, children, ...other } = props;

  const {
    theme: { tableRow },
  } = useContext(ThemeContext);

  const baseStyle = tableRow.base;

  const cls = classNames(baseStyle, className);

  return (
    <tr className={cls} ref={ref} {...other}>
      {children}
    </tr>
  );
});

export default TableRow;
