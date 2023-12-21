import { twMerge } from 'tailwind-merge';

import type { DivProps } from '../../types';

export function Skeleton({ className, ...rest }: DivProps) {
  return <div {...rest} className={twMerge('h-2 w-full max-w-full animate-pulse rounded-lg bg-gray-75', className)} />;
}

export function CircleSkeleton({ className, ...rest }: DivProps) {
  return (
    <div
      {...rest}
      className={twMerge('-w-3 h-3 flex-shrink-0 flex-grow-0 animate-pulse rounded-full bg-gray-75', className)}
    />
  );
}
