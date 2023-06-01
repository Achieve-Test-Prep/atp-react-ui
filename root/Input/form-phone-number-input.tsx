import * as React from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { PatternInput, PatternInputProps } from './PatternInput';

type TProps = Omit<PatternInputProps, 'pattern'> & {
  label: string;
  labelClassName?: string;
};

const FormPhoneNumberInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ label, labelClassName, value, ...props }, ref) => (
    <FormItem>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <PatternInput pattern="### ###-####" as="numeric" value={value} {...props} ref={ref} />
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
