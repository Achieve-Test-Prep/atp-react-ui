import type { PropsWithChildren } from 'react';

import { FormItem, FormLabel, FormMessage } from '../form';

import { Select } from './select';
import type { FormSelectProps } from './types';

export function FormSelect({ labelClassName, formItemClassName, label, ...props }: PropsWithChildren<FormSelectProps>) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
