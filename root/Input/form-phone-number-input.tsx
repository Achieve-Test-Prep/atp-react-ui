import { ReactNode, forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { PatternInput, PatternInputProps } from './PatternInput';

type TProps = Omit<PatternInputProps, 'pattern'> & {
  label: ReactNode;
  labelClassName?: string;
  formItemClassName?: string;
};

const FormPhoneNumberInput = forwardRef<HTMLInputElement, TProps>(
  ({ label, labelClassName, formItemClassName, value, ...props }, ref) => (
    <FormItem className={formItemClassName}>
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
