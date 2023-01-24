import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { TextProps } from './types';

const Text = React.forwardRef<HTMLDivElement, TextProps>(function Label(props, ref) {
  const { children, as = 'div', className, ...other } = props;
  const {
    theme: { text },
  } = useContext(ThemeContext);

  const cls = twMerge(text.p, text?.[as as keyof typeof text] ?? '', className);

  if (as === 'h1') {
    return (
      <h1 className={cls} {...other}>
        {children}
      </h1>
    );
  }

  if (as === 'h2') {
    return (
      <h2 className={cls} {...other}>
        {children}
      </h2>
    );
  }

  if (as === 'h3') {
    return (
      <h3 className={cls} {...other}>
        {children}
      </h3>
    );
  }

  if (as === 'h4') {
    return (
      <h4 className={cls} {...other}>
        {children}
      </h4>
    );
  }

  if (as === 'h5') {
    return (
      <h5 className={cls} {...other}>
        {children}
      </h5>
    );
  }

  if (as === 'h6') {
    return (
      <h6 className={cls} {...other}>
        {children}
      </h6>
    );
  }

  if (as === 'span') {
    return (
      <span className={cls} {...other}>
        {children}
      </span>
    );
  }

  if (as === 'p') {
    return (
      <p className={cls} {...other}>
        {children}
      </p>
    );
  }

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Text;
