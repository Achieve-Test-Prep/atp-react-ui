import { forwardRef } from 'react';

import { FormItem, FormLabel, FormControl, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import type { PatternInputProps } from './pattern-input';
import { PatternInput } from './pattern-input';

type TProps = Omit<PatternInputProps, 'pattern'> & FormLabelProps;

const FormPhoneNumberInput = forwardRef<HTMLInputElement, TProps>(
  ({ label, labelClassName, formItemClassName, value, ...props }, ref) => (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <PatternInput
          pattern="### ###-####"
          as="numeric"
          value={value}
          {...props}
          ref={ref}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
);

FormPhoneNumberInput.displayName = 'FormPhoneNumberInput';

function validatePhoneNumber(value: string) {
  return value.length === 10;
}

export { FormPhoneNumberInput, validatePhoneNumber };
