export interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  /**
   * Defines the color of the select
   */
  valid?: boolean;
  /**
   * Shows the label of the input
   */
  label?: string;
  /**
   * Shows the label of the input
   */
  labelClassName?: string;
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
  value: string | number;
}
