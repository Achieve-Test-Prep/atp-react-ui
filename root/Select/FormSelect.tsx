import { PropsWithChildren } from 'react';

import { FormItem, FormLabel, FormMessage } from '../Form';

import Select from './Select';
import type { FromSelectProps } from './types';

export default function FormSelect({
  labelClassName,
  formItemClassName,
  label,
  ...props
}: PropsWithChildren<FromSelectProps>) {
  return (
    <FormItem className={formItemClassName}>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <Select {...props} />
      <FormMessage />
    </FormItem>
  );
}
