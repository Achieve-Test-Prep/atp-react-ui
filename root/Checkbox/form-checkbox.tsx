import { forwardRef } from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';
import type { FormLabelProps } from '../types';

import Checkbox from './Checkbox';
import type { CheckboxProps, CheckboxRef } from './types';

const FormCheckbox = forwardRef<CheckboxRef, CheckboxProps & FormLabelProps>(
  ({ formItemClassName, label, labelClassName, ...props }, ref) => (
    <FormItem className={formItemClassName}>
      <div className="flex flex-row items-center justify-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox {...props} ref={ref} />
        </FormControl>
        {(label || props.value) && (
          <FormLabel className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}>
            {label ?? props.value}
          </FormLabel>
        )}
      </div>
      <FormMessage />
    </FormItem>
  )
);

export default FormCheckbox;
