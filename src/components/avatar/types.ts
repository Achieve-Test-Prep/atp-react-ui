import type { DivProps } from '../../types';

export type AvatarProps = DivProps & {
  /**
   * The size of the avatar
   */
  size?: 'lg' | 'base' | 'sm';
  /**
   * Alternative text for the avatar image
   */
  alt?: string;
  /**
   * The source for the avatar image
   */
  src: string;
};
