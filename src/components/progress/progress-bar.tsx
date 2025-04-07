import type { ComponentProps } from 'react';
import { useState, useEffect } from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { twMerge } from 'tailwind-merge';

import { Text } from '../typography';

import type { ProgressbarProps } from './types';

export const Progressbar = ({
  className,
  indicatorClassName,
  value,
  ...props
}: React.ComponentProps<ProgressbarProps> & {
  indicatorClassName?: string;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Why the timeout?
    setTimeout(() => {
      setProgress(value ?? 0);
    }, 300);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      className={twMerge(
        'bg-primary-light relative h-2 w-full min-w-full overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={twMerge(
          `bg-primary size-full flex-1 rounded-full transition-all`,
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};

export const ProgressbarWithLabels = ({
  leftLabel,
  rightLabel,
  ...props
}: ComponentProps<ProgressbarProps> & {
  indicatorClassName?: string;
  leftLabel?: string;
  rightLabel?: string;
}) => (
  <article className="flex flex-col gap-y-1">
    <div className="flex items-center justify-between px-1">
      {leftLabel && (
        <Text as="caption-medium-bold" className="text-accent">
          {leftLabel}
        </Text>
      )}
      {rightLabel && (
        <Text as="caption-medium-bold" className="text-accent">
          {rightLabel}
        </Text>
      )}
    </div>
    <Progressbar {...props} />
  </article>
);
