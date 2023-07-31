import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { HelperTextProps } from './types';

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>((props, ref) => {
  const { children, valid, className, ...other } = props;
  const { helperText } = useTheme();

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
