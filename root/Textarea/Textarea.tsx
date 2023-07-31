import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { TextareaProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { disabled, className, children, ...other } = props;

  const { textarea } = useTheme();

  const cls = twMerge(textarea.base, textarea.active, textarea.disabled, className);

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  );
});

export default Textarea;
