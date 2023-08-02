import type { FormLabelProps } from '../types';

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  /**
   * Collection of options
   */
  options: ISelectOption[];
  /**
   * Returns ISelectOptions of options
   */
  onChangeSelection: (o: ISelectOption) => void;
}

export interface ISelectOption {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export type FromSelectProps = SelectProps & FormLabelProps;
