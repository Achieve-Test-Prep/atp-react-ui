import { PropsWithChildren } from 'react';

import { FormItem, FormLabel, FormMessage } from '../Form';

import Select from './Select';
import type { SelectProps } from './types';

export default function FormSelect({
  children,
  labelClassName,
  label,
  ...props
}: PropsWithChildren<SelectProps & { label: string; labelClassName?: string }>) {
  return (
    <FormItem>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
