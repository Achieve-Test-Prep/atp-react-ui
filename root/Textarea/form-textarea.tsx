import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Textarea from './Textarea';
import { TextareaProps } from './types';

export default function FormTextarea({
  label,
  labelClassName,
  ...props
}: TextareaProps & {
  label: string;
  labelClassName?: string;
}) {
  return (
    <FormItem>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <FormControl>
        <Textarea {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
