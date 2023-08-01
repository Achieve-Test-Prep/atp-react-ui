import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { LabelProps } from './types';

const Label = forwardRef<ElementRef<LabelProps>, ComponentPropsWithoutRef<LabelProps>>(
  ({ className, ...props }, ref) => {
    const { label } = useTheme();

    return <LabelPrimitive.Root ref={ref} className={twMerge(label.base, className)} {...props} />;
  }
);

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
