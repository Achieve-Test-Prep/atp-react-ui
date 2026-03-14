import { twMerge } from 'tailwind-merge';

import type { TableSectionProps } from './types';

import { useTheme } from '../../themes';

export const TableBody = ({
  className,
  children,
  ...other
}: TableSectionProps) => {
  const { tableBody } = useTheme();

  const cls = twMerge(tableBody.base, className);

  return (
    <tbody className={cls} {...other}>
      {children}
    </tbody>
  );
};
