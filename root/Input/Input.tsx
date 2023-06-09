import * as React from 'react';

import { InputProps, useInput } from './use-input';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const { styleCls } = useInput({ ...props, className });
  return <input className={styleCls} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
