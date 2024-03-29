import type * as ProgressPrimitive from '@radix-ui/react-progress';

import type { DivProps } from '../../types';

export type SpinnerProps = DivProps & {
  animate?: boolean;
  size?: 'xs' | 'sm' | 'base';
};

export type ProgressbarProps = typeof ProgressPrimitive.Root;
