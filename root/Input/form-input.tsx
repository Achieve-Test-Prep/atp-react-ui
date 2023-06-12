import * as React from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Input from './Input';
import { InputProps } from './use-input';

const FormInput = React.forwardRef<HTMLInputElement, InputProps & { label: string; labelClassName?: string }>(
  ({ label, labelClassName, ...props }, ref) => (
    <FormItem>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <Input {...props} ref={ref} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
);

FormInput.displayName = 'FormInput';

export default FormInput;
