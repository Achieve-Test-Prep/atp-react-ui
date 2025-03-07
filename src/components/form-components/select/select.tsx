import React from 'react';

import type { SelectProps } from './types';
import { useSelect } from './use-select';

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { styleCls, handleChange, multiple, children, options, ...other } =
      useSelect(props);

    return (
      <select
        onChange={handleChange}
        className={styleCls}
        ref={ref}
        multiple={!!multiple}
        {...other}
      >
        {children ||
          options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
