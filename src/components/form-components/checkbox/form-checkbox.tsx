import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { Checkbox } from './check-box';
import type { CheckboxProps } from './types';

export const FormCheckbox = ({
  formItemClassName,
  label,
  labelClassName,
  ...props
}: CheckboxProps & FormLabelProps) => (
  <FormItem className={formItemClassName}>
    <div className="flex flex-row items-center justify-start space-y-0 space-x-3">
      <FormControl>
        <Checkbox {...props} />
      </FormControl>
      {(label || props.value) && (
        <FormLabel
          className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}
        >
          {label ?? props.value}
        </FormLabel>
      )}
    </div>
    <FormMessage />
  </FormItem>
);
