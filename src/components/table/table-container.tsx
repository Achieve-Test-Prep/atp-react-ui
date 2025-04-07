import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const TableContainer = ({ className, children, ...other }: DivProps) => {
  const { tableContainer } = useTheme();

  const cls = twMerge(tableContainer.base, className);

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};
