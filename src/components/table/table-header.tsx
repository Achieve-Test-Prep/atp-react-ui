import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableSectionProps } from './types';

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
