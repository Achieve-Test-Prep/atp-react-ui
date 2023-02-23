import React, { useContext } from 'react';

import { twMerge, twJoin } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { BadgeProps } from './types';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  const { className, children, as = 'base', size = 'base', type = 'primary', ...other } = props;

  const {
    theme: { badge },
  } = useContext(ThemeContext);

  const cls = twMerge(twJoin(badge.size[size], badge.base, badge.as[as][type]), className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
