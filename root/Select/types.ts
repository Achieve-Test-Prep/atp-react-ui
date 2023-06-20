import { ReactNode } from 'react';

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

export interface FromSelectProps extends SelectProps {
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
