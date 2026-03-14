import { twMerge } from 'tailwind-merge';

import type { SpinnerProps } from './types';

import { useTheme } from '../../themes';

export function Spinner({
  className = '',
  animate = true,
  size = 'base',
  ...rest
}: SpinnerProps) {
  const { spinner } = useTheme();

  return (
    <div
      {...rest}
      className={twMerge(
        spinner.base,
        spinner.size[size],
        animate ? 'animate-spin' : '',
        className
      )}
    />
  );
}
