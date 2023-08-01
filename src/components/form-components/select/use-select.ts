import { ChangeEvent, useCallback } from 'react';

import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../../themes';

import type { SelectOption, SelectProps } from './types';

export function useSelect(props: SelectProps) {
  const { onChangeSelection, options, className, multiple, disabled, children, ...other } = props;

  const { select } = useTheme();

  const styleCls = twMerge(
    select.base,
    // don't apply activeStyle if has valid or disabled
    select.active,
    // don't apply disabledStyle if has valid
    select.disabled,
    !multiple && select.select,
    className
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const item = options.find((i) => i.value === e.target.value);
      onChangeSelection(item as SelectOption);
    },
    [onChangeSelection, options]
  );

  return { styleCls, handleChange, disabled, multiple, options, children, ...other };
}
