import { useContext, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { valid?: boolean };

export function useInput({ className, valid }: InputProps) {
  const {
    theme: { input },
  } = useContext(ThemeContext);

  const styleCls = useMemo(
    () => twMerge(input.base, input.active, input.disabled, className),
    [className, input.active, input.base, input.disabled]
  );

  return { styleCls };
}
