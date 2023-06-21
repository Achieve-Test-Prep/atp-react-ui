import { ForwardedRef, forwardRef, useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { CheckboxProps, CheckboxRef } from './types';

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, type = 'checkbox', ...other }: CheckboxProps, ref: ForwardedRef<CheckboxRef>) => {
    const {
      theme: { checkbox },
    } = useContext(ThemeContext);

    const cls = twMerge(checkbox.base, checkbox.active, checkbox.disabled, className);
    return <input ref={ref} {...other} type="checkbox" className={cls} />;
  }
);

export default Checkbox;
