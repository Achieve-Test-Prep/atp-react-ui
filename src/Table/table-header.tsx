import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { TableSectionProps } from './types';
import { ThemeContext } from '../themes/theme-context';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(function TableHeader(props, ref) {
  const { className, children, ...other } = props;

  const {
    theme: { tableHeader },
  } = useContext(ThemeContext);

  const cls = twMerge(tableHeader.base, className);

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  );
});

export default TableHeader;
