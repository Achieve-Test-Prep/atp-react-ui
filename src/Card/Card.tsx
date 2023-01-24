import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { CardProps } from './types';

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props;
  const {
    theme: { card },
  } = useContext(ThemeContext);

  const cls = twMerge(card.base, !colored && card.default, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Card;
