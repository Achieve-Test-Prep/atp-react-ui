import { twMerge } from 'tailwind-merge';

import type { TableSectionProps } from './types';

import { useTheme } from '../../themes';

export const TableHeader = ({
  className,
  children,
  ...other
}: TableSectionProps) => {
  const { tableHeader } = useTheme();

  const cls = twMerge(tableHeader.base, className);

  return (
    <thead className={cls} {...other}>
      {children}
    </thead>
  );
};
