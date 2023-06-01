import { useContext, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { valid?: boolean };

export function useInput({ className, valid }: InputProps) {
  const {
    theme: { input },
  } = useContext(ThemeContext);

  const styleCls = useMemo(() => {
    let validCls = '';
    if (valid !== undefined) {
      validCls = valid ? input.valid : input.invalid;
    }
    return twMerge(input.base, input.active, input.disabled, validCls, className);
  }, [className, input.active, input.base, input.disabled, input.invalid, input.valid, valid]);

  return { styleCls };
}
