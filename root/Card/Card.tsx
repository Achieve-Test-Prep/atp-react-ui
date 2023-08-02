import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';
import type { DivProps } from '../types';

const Card = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;
  const { card } = useTheme();

  const cls = twMerge(card.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Card;
