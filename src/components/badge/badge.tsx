import { twMerge, twJoin } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { BadgeProps } from './types';

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
