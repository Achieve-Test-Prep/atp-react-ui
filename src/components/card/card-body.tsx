import React, { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const CardBody = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => {
    const { className, children, ...other } = props;
    const { cardBody } = useTheme();

    const cls = useMemo(
      () => twMerge(cardBody.base, className),
      [cardBody.base, className]
    );

    return (
      <div className={cls} ref={ref} {...other}>
        {children}
      </div>
    );
  }
);
