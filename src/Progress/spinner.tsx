import { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import type { SpinnerProps } from './types';
import { ThemeContext } from '../themes/theme-context';

export function Spinner({ className = '', animate = true, size = 'base', ...rest }: SpinnerProps) {
  const {
    theme: { spinner },
  } = useContext(ThemeContext);

  return (
    <div {...rest} className={twMerge(spinner.base, spinner.size[size], animate ? 'animate-spin' : '', className)} />
  );
}
