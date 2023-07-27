import { ChangeEvent /* , useContext */, useCallback, useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import type { ISelectOption, SelectProps } from './types';

export default function useSelect(props: SelectProps) {
  const { onChangeSelection, options, className, multiple, disabled, children, ...other } = props;

  const {
    theme: { select },
  } = useContext(ThemeContext);

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
      onChangeSelection(item as ISelectOption);
    },
    [onChangeSelection, options]
  );

  return { styleCls, handleChange, disabled, multiple, options, children, ...other };
}
