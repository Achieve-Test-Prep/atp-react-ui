import { PropsWithChildren } from 'react';

import { FormItem, FormLabel, FormMessage } from '../form';

import { Select } from './select';
import type { FromSelectProps } from './types';

export function FormSelect({ labelClassName, formItemClassName, label, ...props }: PropsWithChildren<FromSelectProps>) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
