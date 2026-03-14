import { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import type { InputProps } from './types';

import { useTheme } from '../../../themes';

export function useInputStyle({ className }: InputProps) {
  const { input } = useTheme();

  const styleCls = useMemo(
    () => twMerge(input.base, input.active, input.disabled, className),
    [className, input.active, input.base, input.disabled]
  );

  return { styleCls };
}
