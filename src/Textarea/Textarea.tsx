import React, { useContext } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../themes/theme-context';
import { TextareaProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, ref) {
  const { valid, disabled, className, children, ...other } = props;

  const {
    theme: { textarea },
  } = useContext(ThemeContext);

  const baseStyle = textarea.base;
  const activeStyle = textarea.active;
  const disabledStyle = textarea.disabled;
  const validStyle = textarea.valid;
  const invalidStyle = textarea.invalid;

  function hasValidation(iValid: boolean | undefined) {
    return iValid !== undefined;
  }

  function validationStyle(iValid: boolean | undefined): string {
    if (hasValidation(iValid)) {
      return iValid ? validStyle : invalidStyle;
    }
    return '';
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  );

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  );
});

export default Textarea;
