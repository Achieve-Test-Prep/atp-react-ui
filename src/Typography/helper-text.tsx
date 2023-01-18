import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { HelperTextProps } from './types';

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(function HelperText(props, ref) {
  const { children, valid, className, ...other } = props;
  const {
    theme: { helperText },
  } = useContext(ThemeContext);

  const baseStyle = helperText.base;
  const validStyle = helperText.valid;
  const invalidStyle = helperText.invalid;

  const validationStyle = (iValid: boolean | undefined): string => {
    switch (iValid) {
      case true:
        return validStyle;
      case false:
        return invalidStyle;
      default:
        return '';
    }
  };

  const cls = classNames(baseStyle, validationStyle(valid), className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default HelperText;
