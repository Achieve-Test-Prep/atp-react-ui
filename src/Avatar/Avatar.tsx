import React, { useContext } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { AvatarProps } from './types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'base', src, alt, className, ...other } = props;
  const {
    theme: { avatar },
  } = useContext(ThemeContext);

  const cls = twMerge(classNames(avatar.base, avatar.size[size]), className);

  return (
    <div className={cls} ref={ref} {...other}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  );
});

export default Avatar;
