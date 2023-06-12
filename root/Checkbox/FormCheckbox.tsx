import { PropsWithChildren } from 'react';

import { CheckboxProps } from '@radix-ui/react-checkbox';

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
    <FormItem className={formItemClassName}>
      <div className="flex flex-row items-center justify-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox {...props} />
        </FormControl>
        {label && <FormLabel className="cursor-pointer">{label}</FormLabel>}
      </div>
      <FormMessage />
    </FormItem>
  );
}
