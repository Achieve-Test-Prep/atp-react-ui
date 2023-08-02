import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { SpinnerProps } from './types';

export function Spinner({ className = '', animate = true, size = 'base', ...rest }: SpinnerProps) {
  const { spinner } = useTheme();

  return (
    <div {...rest} className={twMerge(spinner.base, spinner.size[size], animate ? 'animate-spin' : '', className)} />
  );
}
