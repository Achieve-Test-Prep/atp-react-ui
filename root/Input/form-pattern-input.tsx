import { ReactNode, forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { PatternInput, PatternInputProps } from './PatternInput';

type TProps = PatternInputProps & {
  label: ReactNode;
  labelClassName?: string;
  formItemClassName?: string;
};

const FormPatternInput = forwardRef<HTMLInputElement, TProps>(
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

export default FormPatternInput;
