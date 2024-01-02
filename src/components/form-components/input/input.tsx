import * as React from 'react';

import type { InputProps } from './use-input';
import { useInputStyle } from './use-input';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const { styleCls } = useInputStyle({ ...props, className });
  return <input className={styleCls} ref={ref} {...props} />;
});

Input.displayName = 'Input';
