import { PropsWithChildren } from 'react';

import { FormItem, FormLabel, FormMessage } from '../Form';

import Select from './Select';
import type { SelectProps } from './types';

export default function FormSelect({
  children,
  labelClassName,
  formItemClassName,
  label,
  ...props
}: PropsWithChildren<SelectProps & { label: string; labelClassName?: string; formItemClassName?: string }>) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
