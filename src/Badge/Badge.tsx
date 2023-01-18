import React, { useContext } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { BadgeProps } from './types';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  const { className, children, as = 'base', size = 'base', type = 'primary', ...other } = props;

  const {
    theme: { badge },
  } = useContext(ThemeContext);

  const cls = twMerge(classNames(badge.base, badge.as[as][type], badge.size[size]), className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
