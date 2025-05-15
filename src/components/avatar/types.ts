import type * as AvatarPrimitive from '@radix-ui/react-avatar';

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & {
  /**
   * The size of the avatar
   */
  size?: 'lg' | 'base' | 'sm';
};
