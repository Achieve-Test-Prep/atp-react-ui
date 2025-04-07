import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { Textarea } from './text-area';
import type { TextareaProps } from './types';

export const FormTextarea = ({
  label,
  formItemClassName,
  labelClassName,
  ...props
}: TextareaProps & FormLabelProps) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <Textarea {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);

FormTextarea.displayName = 'FormTextarea';
