import React from 'react';

import { twMerge, twJoin } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { BadgeProps } from './types';

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, children, as = 'base', size = 'base', type = 'primary', ...other } = props;

  const { badge } = useTheme();

  const cls = twMerge(twJoin(badge.size[size], badge.base, badge.as[as][type]), className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});
