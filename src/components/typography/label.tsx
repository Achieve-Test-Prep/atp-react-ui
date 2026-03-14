import type { ComponentProps } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

import type { LabelProps } from './types';

import { useTheme } from '../../themes';

export const Label = ({ className, ...props }: ComponentProps<LabelProps>) => {
  const { label } = useTheme();

  return (
    <LabelPrimitive.Root
      className={twMerge(label.base, className)}
      {...props}
    />
  );
};
