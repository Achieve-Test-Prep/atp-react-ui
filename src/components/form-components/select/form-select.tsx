import type { PropsWithChildren } from 'react';

import { Select } from './select';
import type { FormSelectProps } from './types';

import { FormItem, FormLabel, FormMessage } from '../form';

export function FormSelect({
  labelClassName,
  formItemClassName,
  label,
  ...props
}: PropsWithChildren<FormSelectProps>) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
