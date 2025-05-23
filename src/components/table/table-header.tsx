import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableSectionProps } from './types';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableSectionProps
>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableHeader } = useTheme();

  const cls = twMerge(tableHeader.base, className);

  return (
    <thead className={cls} ref={ref} {...other}>
      {children}
    </thead>
  );
});
