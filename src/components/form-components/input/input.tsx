import type { InputProps } from './types';
import { useInputStyle } from './use-input';

export const Input = ({ className, ...props }: InputProps) => {
  const { styleCls } = useInputStyle({ ...props, className });
  return <input className={styleCls} {...props} />;
};

Input.displayName = 'Input';
