import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { TextareaProps } from './types';
import { ThemeContext } from '../themes/theme-context';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, ref) {
  const { valid, disabled, className, children, ...other } = props;

  const {
    theme: { textarea },
  } = useContext(ThemeContext);

  function hasValidation(iValid: boolean | undefined) {
    return iValid !== undefined;
  }

  function validationStyle(iValid: boolean | undefined): string {
    if (hasValidation(iValid)) {
      return iValid ? textarea.valid : textarea.invalid;
    }
    return '';
  }

  const cls = twMerge(
    textarea.base,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && textarea.active,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && textarea.disabled,
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
