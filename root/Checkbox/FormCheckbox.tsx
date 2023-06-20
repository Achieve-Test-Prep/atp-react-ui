import { ElementRef, ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import Checkbox from './Checkbox';
import { CheckboxProps } from './types';

const FormCheckbox = forwardRef<
  ElementRef<CheckboxProps>,
  ComponentPropsWithoutRef<CheckboxProps> & {
    /**
     * Shows the label of the input
     */
    label?: ReactNode;
    /**
     * Shows the label of the input
     */
    labelClassName?: string;

    formItemClassName?: string;
  }
>(({ formItemClassName, label, labelClassName, ...props }, ref) => (
  <FormItem className={formItemClassName}>
    <div className="flex flex-row items-center justify-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox {...props} ref={ref} />
      </FormControl>
      {label && <FormLabel className={`cursor-pointer ${labelClassName}`}>{label}</FormLabel>}
    </div>
    <FormMessage />
  </FormItem>
));

export default FormCheckbox;
