import { ForwardedRef, forwardRef, useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { Label } from '../Typography';

import type { RadioProps, RadioRef } from './types';

const Radio = forwardRef<RadioRef, RadioProps>(
  (
    { valid, className, type = 'radio', label, disabled, labelClassName, ...other }: RadioProps,
    ref: ForwardedRef<RadioRef>
  ) => {
    const {
      theme: { radio },
    } = useContext(ThemeContext);

    function validationStyle(iValid: boolean | undefined): string {
      if (iValid !== undefined) {
        return iValid ? radio.valid : radio.invalid;
      }
      return '';
    }

    const cls = twMerge(radio.base, radio.active, radio.disabled, validationStyle(valid), className);

    return (
      <Label radio disabled={disabled} className={labelClassName}>
        <input ref={ref} {...other} type="radio" disabled={disabled} className={cls} />
        {label}
      </Label>
    );
  }
);

export default Radio;
