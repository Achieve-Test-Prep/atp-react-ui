import { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { valid?: boolean };

export function useInput({ className }: InputProps) {
  const { input } = useTheme();

  const styleCls = useMemo(
    () => twMerge(input.base, input.active, input.disabled, className),
    [className, input.active, input.base, input.disabled]
  );

  return { styleCls };
}
