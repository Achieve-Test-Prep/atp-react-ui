import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { AvatarProps } from './types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size = 'base', src, alt, className, ...other } = props;
  const { avatar } = useTheme();

  const cls = twMerge(avatar.base, avatar.size[size], className);

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="h-full w-full rounded-full object-cover" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  );
});

export default Avatar;
