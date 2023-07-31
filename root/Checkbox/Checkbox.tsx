import { ForwardedRef, forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../themes/useTheme';

import type { CheckboxProps, CheckboxRef } from './types';

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, type = 'checkbox', ...other }: CheckboxProps, ref: ForwardedRef<CheckboxRef>) => {
    const { checkbox } = useTheme();

    const cls = twMerge(checkbox.base, checkbox.active, checkbox.disabled, className);
    return <input ref={ref} {...other} type="checkbox" className={cls} />;
  }
);

export default Checkbox;
