import React, { useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/use-theme';

import type { TextProps } from './types';

export const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const { children, as = 'div', className, ...other } = props;
  const { text } = useTheme();

  const cls = useMemo(
    () => twMerge(as === 'div' || as === 'span' ? text.p : '', text?.[as as keyof typeof text] ?? '', className),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [as, className]
  );

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
