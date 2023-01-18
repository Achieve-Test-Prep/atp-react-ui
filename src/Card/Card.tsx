import React, { useContext } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { CardProps } from './types';

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props;
  const {
    theme: { card },
  } = useContext(ThemeContext);

  const baseStyle = card.base;
  const uncoloredStyle = card.default;

  const cls = twMerge(classNames(baseStyle, !colored && uncoloredStyle), className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Card;
