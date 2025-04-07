import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableSectionProps } from './types';

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
