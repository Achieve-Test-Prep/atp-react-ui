import { DivProps } from '../types';

export interface AvatarProps extends DivProps {
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
}
