export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Defines the color of the input
   */
  valid?: boolean;
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean;
  /**
   * Defines the type of the input
   */
  type?: string;
  /**
   * Shows the label of the input
   */
  label?: string;
  /**
   * Shows the label of the input
   */
  labelClassName?: string;
}

export type CheckboxRef = HTMLInputElement | null;
