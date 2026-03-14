import { twMerge } from 'tailwind-merge';

import type { TextareaProps } from './types';

import { useTheme } from '../../../themes';

export const Textarea = ({
  disabled,
  className,
  children,
  ...other
}: TextareaProps) => {
  const { textarea } = useTheme();

  const cls = twMerge(
    textarea.base,
    textarea.active,
    textarea.disabled,
    className
  );

  return (
    <textarea className={cls} disabled={disabled} {...other}>
      {children}
    </textarea>
  );
};
