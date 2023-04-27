import React, { useContext, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import type { DivProps } from '../types';

const CardBody = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;
  const {
    theme: { cardBody },
  } = useContext(ThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cls = useMemo(() => helper(cardBody.base, className), [className]);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default CardBody;

function helper(base: string, className?: string) {
  return twMerge(base, className);
}
