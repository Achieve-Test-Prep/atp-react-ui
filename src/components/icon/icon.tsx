import { twMerge } from 'tailwind-merge';

import type { IconProps } from './types';

export function Icon({ icon: SingleIcon, className }: IconProps) {
  return <SingleIcon aria-hidden="true" className={twMerge('size-5 flex-shrink-0', className)} />;
}
