import * as ProgressPrimitive from '@radix-ui/react-progress';

import { DivProps } from '../../types';

export type SpinnerProps = DivProps & {
  animate?: boolean;
  size?: 'xs' | 'sm' | 'base';
};

export type ProgressbarProps = typeof ProgressPrimitive.Root;
