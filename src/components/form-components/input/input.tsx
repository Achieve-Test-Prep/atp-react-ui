import { forwardRef } from 'react';

import type { InputProps } from './types';
import { useInputStyle } from './use-input';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { styleCls } = useInputStyle({ ...props, className });

    return <input ref={ref} className={styleCls} {...props} />;
  }
);

Input.displayName = 'Input';
