import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import { DivProps } from '../../types';

export const Backdrop = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, ...other } = props;
  const { backdrop } = useTheme();

  const cls = twMerge(backdrop.base, className);

  return <section className={cls} ref={ref} {...other} />;
});
