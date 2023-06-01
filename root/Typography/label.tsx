import { forwardRef, ElementRef, ComponentPropsWithoutRef, useContext } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
  ({ className, ...props }, ref) => {
    const {
      theme: { label },
    } = useContext(ThemeContext);
    return <LabelPrimitive.Root ref={ref} className={twMerge(label.base, className)} {...props} />;
  }
);

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
