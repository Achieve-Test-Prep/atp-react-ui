'use client';

import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { twMerge } from 'tailwind-merge';

const Progressbar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { indicatorClassName?: string }
>(({ className, indicatorClassName, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={twMerge('relative h-2 w-full min-w-full overflow-hidden rounded-full bg-primary-light', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={twMerge(`h-full w-full flex-1 rounded-full bg-primary transition-all`, indicatorClassName)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progressbar.displayName = ProgressPrimitive.Root.displayName;

export default Progressbar;
