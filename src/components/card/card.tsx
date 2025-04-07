import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const Card = ({ className, children, ...other }: DivProps) => {
  const { card } = useTheme();

  const cls = twMerge(card.base, className);

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};
