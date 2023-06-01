import { PropsWithChildren } from 'react';

import { CheckboxProps } from '@radix-ui/react-checkbox';

import { FormControl, FormItem, FormLabel } from '../Form';

import Checkbox from './Checkbox';

export default function FormCheckbox({
  label,
  labelClassName,
  children,
  placeholder,
  ...props
}: PropsWithChildren<CheckboxProps & { label: string; labelClassName?: string; placeholder?: string }>) {
  return (
    <FormItem className="flex flex-row items-start justify-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox {...props} />
      </FormControl>
      {label && <FormLabel className="cursor-pointer">{label}</FormLabel>}
    </FormItem>
  );
}
