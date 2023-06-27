export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean;
  /**
   * Defines the type of the input
   */
  type?: string;
}
