import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { Label } from '../Typography';
import { InputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { valid, className, label, labelClassName, ...other } = props;

  const {
    theme: { input },
  } = useContext(ThemeContext);

  function validationStyle(iValid: boolean | undefined): string {
    if (iValid !== undefined) {
      return iValid ? input.valid : input.invalid;
    }
    return '';
  }

  const cls = twMerge(input.base, input.active, input.disabled, validationStyle(valid), className);

  return (
    <div>
      <Label className={labelClassName}>{label}</Label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input ref={ref} {...other} className={cls} />
      </div>
    </div>
  );
});

export default Input;
