import React, { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import type { DivProps } from '../types';

const CardBody = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;
  const {
    theme: { cardBody },
  } = useContext(ThemeContext);

  const cls = twMerge(cardBody.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default CardBody;
