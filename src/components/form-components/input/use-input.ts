import { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../../themes';

import type { InputProps } from './types';

export function useInputStyle({ className }: InputProps) {
  const { input } = useTheme();

  const styleCls = useMemo(
    () => twMerge(input.base, input.active, input.disabled, className),
    [className, input.active, input.base, input.disabled]
  );

  return { styleCls };
}
