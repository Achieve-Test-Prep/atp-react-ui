import { twMerge } from 'tailwind-merge';

import type { TableRowProps } from './types';

import { useTheme } from '../../themes';

export const TableRow = ({ className, children, ...other }: TableRowProps) => {
  const { tableRow } = useTheme();

  const cls = twMerge(tableRow.base, className);

  return (
    <tr className={cls} {...other}>
      {children}
    </tr>
  );
};
