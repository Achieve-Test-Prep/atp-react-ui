import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { TableSectionProps } from './types';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableSectionProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableHeader } = useTheme();

  const cls = twMerge(tableHeader.base, className);

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  );
});

export default TableHeader;
