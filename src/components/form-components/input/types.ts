// export type InputProps = React.ComponentPropsWithRef<'input'> & {
//   /**
//    * Defines if the input is disabled
//    */
//   disabled?: boolean;
//   /**
//    * Defines the type of the input
//    */
//   type?: string;
// };

export type InputProps = Partial<
  React.InputHTMLAttributes<HTMLInputElement>
> & { valid?: boolean };

export function validatePhoneNumber(value: string) {
  return value.length === 10;
}
