import type { ComponentProps } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { LabelProps } from './types';

export const Label = ({ className, ...props }: ComponentProps<LabelProps>) => {
  const { label } = useTheme();

  return (
    <LabelPrimitive.Root
      className={twMerge(label.base, className)}
      {...props}
    />
  );
};
