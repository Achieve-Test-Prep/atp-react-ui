import { useState, useEffect, forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { twMerge } from 'tailwind-merge';

import { Text } from '../typography';

import type { ProgressbarProps } from './types';

export const Progressbar = forwardRef<
  React.ElementRef<ProgressbarProps>,
  React.ComponentPropsWithoutRef<ProgressbarProps> & { indicatorClassName?: string }
>(({ className, indicatorClassName, value, ...props }, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Why the timeout?
    setTimeout(() => {
      setProgress(value ?? 0);
    }, 300);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={twMerge('relative h-2 w-full min-w-full overflow-hidden rounded-full bg-primary-light', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={twMerge(`h-full w-full flex-1 rounded-full bg-primary transition-all`, indicatorClassName)}
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

export const ProgressbarWithLabels = forwardRef<
  ElementRef<ProgressbarProps>,
  ComponentPropsWithoutRef<ProgressbarProps> & { indicatorClassName?: string; leftLabel?: string; rightLabel?: string }
>(({ leftLabel, rightLabel, ...props }, ref) => (
  <article className="flex flex-col gap-y-1">
    <div className="flex items-center justify-between px-1">
      {leftLabel && <Text as="caption-medium">{leftLabel}</Text>}
      {rightLabel && <Text as="caption-medium">{rightLabel}</Text>}
    </div>
    <Progressbar {...props} ref={ref} />
  </article>
));
