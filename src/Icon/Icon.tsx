import * as HeroOutlinedIcons from '@heroicons/react/24/outline';
import * as HeroSolidIcons from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

import { IconProps } from './types';

export default function Icon({ icon, type = 'outlined', className = '' }: IconProps) {
  const SingleIcon = type === 'outlined' ? HeroOutlinedIcons[icon] : HeroSolidIcons[icon];

  return <SingleIcon aria-hidden="true" className={twMerge('font h-5 w-5 flex-shrink-0', className)} />;
}
