import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { TextareaProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { disabled, className, children, ...other } = props;

  const {
    theme: { textarea },
  } = useContext(ThemeContext);

  const cls = twMerge(textarea.base, textarea.disabled, className);

  return (
    <textarea className={cls} ref={ref} disabled={disabled} {...other}>
      {children}
    </textarea>
  );
});

export default Textarea;
