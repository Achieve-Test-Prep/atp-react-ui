import { twMerge } from 'tailwind-merge';

import { DivProps } from '../types';

export function Skeleton({ className, ...rest }: DivProps) {
  return <div {...rest} className={twMerge('animate-pulse rounded bg-gray-75 w-full h-2', className)} />;
}

export function CircleSkeleton({ className, ...rest }: DivProps) {
  return (
    <div
      {...rest}
      className={twMerge('flex-shrink-0 h-3 -w-3 flex-grow-0 animate-pulse rounded-full bg-gray-75', className)}
    />
  );
}
