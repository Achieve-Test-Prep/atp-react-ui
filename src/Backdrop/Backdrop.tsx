import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { DivProps } from '../types';

const Backdrop = React.forwardRef<HTMLDivElement, DivProps>(function Backdrop(props, ref) {
  const { className, ...other } = props;
  const {
    theme: { backdrop },
  } = useContext(ThemeContext);

  const baseStyle = backdrop.base;

  const cls = classNames(baseStyle, className);
  return <div className={cls} ref={ref} {...other}></div>;
});

export default Backdrop;
