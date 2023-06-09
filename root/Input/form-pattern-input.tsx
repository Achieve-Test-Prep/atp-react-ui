import * as React from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { PatternInput, PatternInputProps } from './PatternInput';

type TProps = PatternInputProps & {
  label: string;
  labelClassName?: string;
};

const FormPatternInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ label, labelClassName, value, ...props }, ref) => (
    <FormItem>
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
