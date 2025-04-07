import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const TableFooter = ({ className, children, ...other }: DivProps) => {
  const { tableFooter } = useTheme();

  const cls = twMerge(tableFooter.base, className);

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};
