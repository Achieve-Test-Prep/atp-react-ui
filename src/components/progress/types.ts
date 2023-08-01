import * as ProgressPrimitive from '@radix-ui/react-progress';

import type { DivProps } from '../../types';

export interface SpinnerProps extends DivProps {
  animate?: boolean;
  size?: 'xs' | 'sm' | 'base';
}

export type ProgressbarProps = typeof ProgressPrimitive.Root;
