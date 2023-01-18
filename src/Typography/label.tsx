import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { LabelProps } from './types';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { children, checkbox, radio, disabled, className, ...other } = props;
  const {
    theme: { label },
  } = useContext(ThemeContext);

  const baseStyle = label.base;
  const checkStyle = label.checkbox;
  const disabledStyle = label.disabled;

  const cls = twMerge(
    baseStyle,
    // check and radio are interchangeable
    (checkbox || radio) && checkStyle,
    disabled && disabledStyle,
    className
  );

  return (
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  );
});

export default Label;
