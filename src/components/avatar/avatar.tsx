import * as React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { AvatarProps } from './types';

function Avatar({ className, size = 'base', ...props }: AvatarProps) {
  const { avatar } = useTheme();
  const cls = twMerge(avatar.base, avatar.size[size], className);
  return <AvatarPrimitive.Root data-slot="avatar" className={cls} {...props} />;
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={twMerge('aspect-square size-full', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={twMerge(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
