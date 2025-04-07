import { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const CardBody = ({ className, children, ...other }: DivProps) => {
  const { cardBody } = useTheme();

  const cls = useMemo(
    () => twMerge(cardBody.base, className),
    [cardBody.base, className]
  );

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};
