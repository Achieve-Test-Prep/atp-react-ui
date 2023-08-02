import React, { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';
import type { DivProps } from '../types';

export const CardBody = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;
  const { cardBody } = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cls = useMemo(() => twMerge(cardBody.base, className), [className]);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});
