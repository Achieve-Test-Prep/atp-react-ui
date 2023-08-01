import { forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { PatternInput, PatternInputProps } from './pattern-input';

type TProps = PatternInputProps & FormLabelProps;

export const FormPatternInput = forwardRef<HTMLInputElement, TProps>(
  ({ label, labelClassName, formItemClassName, value, ...props }, ref) => (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <PatternInput value={value} {...props} ref={ref} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
);

FormPatternInput.displayName = 'FormPatternInput';
