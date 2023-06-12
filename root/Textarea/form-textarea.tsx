import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Textarea from './Textarea';
import { TextareaProps } from './types';

export default function FormTextarea({
  label,
  labelClassName,
  formItemClassName,
  ...props
}: TextareaProps & {
  label: string;
  labelClassName?: string;
  formItemClassName?: string;
}) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <Textarea {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
