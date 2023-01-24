import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { HelperTextProps } from './types';
import { ThemeContext } from '../themes/theme-context';

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(function HelperText(props, ref) {
  const { children, valid, className, ...other } = props;
  const {
    theme: { helperText },
  } = useContext(ThemeContext);

  const validationStyle = (iValid: boolean | undefined): string => {
    switch (iValid) {
      case true:
        return helperText.valid;
      case false:
        return helperText.invalid;
      default:
        return '';
    }
  };

  const cls = twMerge(helperText.base, validationStyle(valid), className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default HelperText;
