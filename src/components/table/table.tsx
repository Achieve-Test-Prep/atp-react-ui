import React from 'react';

import type { TableProps } from './types';

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (props, ref) => {
    const { children, ...other } = props;
    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap" ref={ref} {...other}>
          {children}
        </table>
      </div>
    );
  }
);
