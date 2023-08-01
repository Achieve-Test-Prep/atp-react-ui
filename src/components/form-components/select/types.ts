import type { FormLabelProps } from '../types';

export type SelectProps = React.ComponentPropsWithRef<'select'> & {
  /**
   * Collection of options
   */
  options: SelectOption[];
  /**
   * Returns ISelectOptions of options
   */
  onChangeSelection: (o: SelectOption) => void;
};

export type SelectOption = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
};

export type FormSelectProps = SelectProps & FormLabelProps;
