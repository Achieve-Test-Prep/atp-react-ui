import { ForwardedRef, forwardRef, useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { Label } from '../Typography';

import type { CheckboxProps, CheckboxRef } from './types';

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  (
    { valid, className, type = 'check', label, disabled, labelClassName, ...other }: CheckboxProps,
    ref: ForwardedRef<CheckboxRef>
  ) => {
    const {
      theme: { checkbox },
    } = useContext(ThemeContext);

    function validationStyle(iValid: boolean | undefined): string {
      if (iValid !== undefined) {
        return iValid ? checkbox.valid : checkbox.invalid;
      }
      return '';
    }

    const cls = twMerge(checkbox.base, checkbox.active, checkbox.disabled, validationStyle(valid), className);

    return (
      <Label checkbox disabled={disabled} className={labelClassName}>
        <input ref={ref} {...other} type="checkbox" disabled={disabled} className={cls} />
        {label}
      </Label>
    );
  }
);

export default Checkbox;
