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
  value: string | number;
}
