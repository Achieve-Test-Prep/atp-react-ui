import { DivProps } from '../types';

export interface SpinnerProps extends DivProps {
  animate?: boolean;
  size?: 'xs' | 'sm' | 'base';
}
