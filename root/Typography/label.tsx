import { forwardRef, ElementRef, ComponentPropsWithoutRef, useContext } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { LabelProps } from './types';

const Label = forwardRef<ElementRef<LabelProps>, ComponentPropsWithoutRef<LabelProps>>(
  ({ className, ...props }, ref) => {
    const {
      theme: { label },
    } = useContext(ThemeContext);

    return <LabelPrimitive.Root ref={ref} className={twMerge(label.base, className)} {...props} />;
  }
);

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
