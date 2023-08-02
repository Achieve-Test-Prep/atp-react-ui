import { forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';
import type { FormLabelProps } from '../types';

import { Input } from './Input';
import { InputProps } from './use-input';

export const FormInput = forwardRef<HTMLInputElement, InputProps & FormLabelProps>(
  ({ label, labelClassName, formItemClassName, ...props }, ref) => (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <Input {...props} ref={ref} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
);

FormInput.displayName = 'FormInput';