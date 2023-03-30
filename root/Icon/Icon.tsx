import { twMerge } from 'tailwind-merge';

import type { IconProps } from './types';

export default function Icon({ icon: SingleIcon, className }: IconProps) {
  return <SingleIcon aria-hidden="true" className={twMerge('h-5 w-5 flex-shrink-0', className)} />;
}
