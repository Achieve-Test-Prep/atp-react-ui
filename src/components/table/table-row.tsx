import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { TableRowProps } from './types';

export const TableRow = ({ className, children, ...other }: TableRowProps) => {
  const { tableRow } = useTheme();

  const cls = twMerge(tableRow.base, className);

  return (
    <tr className={cls} {...other}>
      {children}
    </tr>
  );
};
