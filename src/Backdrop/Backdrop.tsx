import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const Backdrop = React.forwardRef<HTMLDivElement, DivProps>(function Backdrop(props, ref) {
  const { className, ...other } = props;
  const {
    theme: { backdrop },
  } = useContext(ThemeContext);

  const cls = twMerge(backdrop.base, className);

  return <section className={cls} ref={ref} {...other} />;
});

export default Backdrop;
