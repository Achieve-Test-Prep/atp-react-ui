import { twMerge } from 'tailwind-merge';

import type { DivProps } from '../../types';

export function Skeleton({ className, ...rest }: DivProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'bg-gray-75 h-2 w-full max-w-full animate-pulse rounded-lg',
        className
      )}
    />
  );
}

export function CircleSkeleton({ className, ...rest }: DivProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'bg-gray-75 size-3 flex-shrink-0 flex-grow-0 animate-pulse rounded-full',
        className
      )}
    />
  );
}
