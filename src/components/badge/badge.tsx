import { twJoin, twMerge } from 'tailwind-merge';

import type { BadgeProps } from './types';

import { useTheme } from '../../themes';

export const Badge = ({
  className,
  children,
  as = 'base',
  size = 'base',
  type = 'primary',
  ...other
}: BadgeProps) => {
  const { badge } = useTheme();

  const cls = twMerge(
    twJoin(badge.size[size], badge.base, badge.as[as][type]),
    className
  );

  return (
    <span className={cls} {...other}>
      {children}
    </span>
  );
};
