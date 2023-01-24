import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { LabelProps } from './types';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { children, checkbox, radio, disabled, className, ...other } = props;
  const {
    theme: { label },
  } = useContext(ThemeContext);

  const cls = twMerge(
    label.base,
    // check and radio are interchangeable
    (checkbox || radio) && label.checkbox,
    disabled && label.disabled,
    className
  );

  return (
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  );
});

export default Label;
