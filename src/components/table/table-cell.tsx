import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableCellProps } from './types';

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
