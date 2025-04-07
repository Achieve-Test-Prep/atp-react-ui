import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { Input } from './input';
import type { InputProps } from './types';

export const FormInput = ({
  label,
  labelClassName,
  formItemClassName,
  ...props
}: InputProps & FormLabelProps) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <Input {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);
