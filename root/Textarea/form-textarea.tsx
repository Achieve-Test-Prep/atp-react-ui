import { ReactNode, forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Textarea from './Textarea';
import type { TextareaProps } from './types';

const FormTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps & { label: ReactNode; labelClassName?: string; formItemClassName?: string }
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

export default FormTextarea;
