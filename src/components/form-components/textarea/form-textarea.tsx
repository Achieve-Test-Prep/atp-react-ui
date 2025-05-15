import { forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { Textarea } from './text-area';
import type { TextareaProps } from './types';

export const FormTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps & FormLabelProps
>(({ label, formItemClassName, labelClassName, ...props }, ref) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <Textarea {...props} ref={ref} />
    </FormControl>
    <FormMessage />
  </FormItem>
));

FormTextarea.displayName = 'FormTextarea';
