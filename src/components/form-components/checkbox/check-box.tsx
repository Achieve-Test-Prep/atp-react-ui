import { twMerge } from 'tailwind-merge';

import type { CheckboxProps } from './types';

import { useTheme } from '../../../themes';

export const Checkbox = ({
  className,
  type = 'checkbox',
  ...other
}: CheckboxProps) => {
  const { checkbox } = useTheme();

  const cls = twMerge(
    checkbox.base,
    checkbox.active,
    checkbox.disabled,
    className
  );

  return <input {...other} type={type} className={cls} />;
};
