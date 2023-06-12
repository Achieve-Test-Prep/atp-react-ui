import { PropsWithChildren } from 'react';

import { CheckboxProps } from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Checkbox from './Checkbox';

export default function FormCheckbox({
  label,
  labelClassName,
  formItemClassName,
  children,
  placeholder,
  ...props
}: PropsWithChildren<
  CheckboxProps & { label: string; labelClassName?: string; placeholder?: string; formItemClassName?: string }
>) {
  return (
    <FormItem className={twMerge('flex flex-row items-start justify-start space-x-3 space-y-0', formItemClassName)}>
      <FormControl>
        <Checkbox {...props} />
        {label && <FormLabel className="cursor-pointer">{label}</FormLabel>}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
