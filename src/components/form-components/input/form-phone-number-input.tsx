import { FormItem, FormLabel, FormControl, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import type { PatternInputProps } from './pattern-input';
import { PatternInput } from './pattern-input';

type TProps = Omit<PatternInputProps, 'pattern'> & FormLabelProps;

const FormPhoneNumberInput = ({
  label,
  labelClassName,
  formItemClassName,
  value,
  ...props
}: TProps) => (
  <FormItem className={formItemClassName}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <PatternInput
        pattern="### ###-####"
        as="numeric"
        value={value}
        {...props}
      />
    </FormControl>
    <FormMessage />
  </FormItem>
);

export { FormPhoneNumberInput };
