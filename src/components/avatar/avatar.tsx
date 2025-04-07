import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { AvatarProps } from './types';

export const Avatar = ({
  size = 'base',
  src,
  alt,
  className,
  ...other
}: AvatarProps) => {
  const { avatar } = useTheme();

  const cls = twMerge(avatar.base, avatar.size[size], className);

  return (
    <div className={cls} {...other}>
      <img
        className="size-full rounded-full object-cover"
        src={src}
        alt={alt}
        loading="lazy"
      />
      <div
        className="absolute inset-0 rounded-full shadow-inner"
        aria-hidden="true"
      />
    </div>
  );
};
