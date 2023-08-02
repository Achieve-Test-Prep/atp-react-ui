import React from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

export const TableContainer = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...other } = props;

  const { tableContainer } = useTheme();

  const cls = twMerge(tableContainer.base, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});
