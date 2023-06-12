import * as React from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Input from './Input';
import { InputProps } from './use-input';

const FormInput = React.forwardRef<
  HTMLInputElement,
  InputProps & { label: string; labelClassName?: string; formItemClassName?: string }
>(({ label, labelClassName, formItemClassName, ...props }, ref) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <Input {...props} ref={ref} />
    </FormControl>
    <FormMessage />
  </FormItem>
));

FormInput.displayName = 'FormInput';

export default FormInput;
