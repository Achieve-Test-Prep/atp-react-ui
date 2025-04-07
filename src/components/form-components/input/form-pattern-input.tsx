import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import type { PatternInputProps } from './pattern-input';
import { PatternInput } from './pattern-input';

type TProps = PatternInputProps & FormLabelProps;

export const FormPatternInput = ({
  label,
  labelClassName,
  formItemClassName,
  value,
  ...props
}: TProps) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <PatternInput value={value} {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);
