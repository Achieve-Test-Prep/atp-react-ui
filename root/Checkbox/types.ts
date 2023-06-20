import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export type CheckboxProps = typeof CheckboxPrimitive.Root;

export type FormCheckboxProps = Omit<CheckboxProps, 'onCheckedChange'>;
