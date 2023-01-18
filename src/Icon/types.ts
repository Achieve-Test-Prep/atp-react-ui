import * as HeroOutlinedIcons from '@heroicons/react/24/outline';
export type IconName = keyof typeof HeroOutlinedIcons;

export interface IconProps {
  icon: IconName;
  type?: 'solid' | 'outlined';
  className?: string;
}
