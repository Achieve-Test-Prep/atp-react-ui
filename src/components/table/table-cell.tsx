import { twMerge } from 'tailwind-merge';

import type { TableCellProps } from './types';

import { useTheme } from '../../themes';

export const TableCell = ({
  className,
  children,
  ...other
}: TableCellProps) => {
  const { tableCell } = useTheme();

  const cls = twMerge(tableCell.base, className);

  return (
    <td className={cls} {...other}>
      {children}
    </td>
  );
};
