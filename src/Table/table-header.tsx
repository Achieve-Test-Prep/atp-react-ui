import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { TableSectionProps } from './types';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(function TableHeader(props, ref) {
  const { className, children, ...other } = props;

  const {
    theme: { tableHeader },
  } = useContext(ThemeContext);

  const baseStyle = tableHeader.base;

  const cls = classNames(baseStyle, className);

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  );
});

export default TableHeader;
