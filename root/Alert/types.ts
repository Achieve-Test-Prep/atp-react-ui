import { SVGAttributes } from 'react';

import type { DivProps } from '../types';

enum AlertEnum {
  success,
  error,
  warning,
  info,
  neutral,
}

export interface AlertProps extends DivProps {
  /**
   * The type of the alert
   */
  type?: keyof typeof AlertEnum;
  /**
   * If defined, shows the close icon that calls this function
   */
  onClose?: () => void;
}

export type AlertIconProps = SVGAttributes<SVGElement>;
