import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../../themes';

import type { CheckboxProps } from './types';

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
