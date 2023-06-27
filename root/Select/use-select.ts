import { ChangeEvent /* , useContext */, useCallback } from 'react';

import { twMerge } from 'tailwind-merge';

import type { ISelectOption, SelectProps } from './types';

// Select
const select = {
  base: 'block w-full p-2.5 text-sm text-accent-light focus:outline-none tb:text-gray-300 rounded-lg',
  active:
    'focus:border-primary border-outline tb:border-outline tb:bg-gray-700 focus:ring focus:ring-primary-light tb:focus:ring-gray-300 tb:focus:border-outline',
  select: 'leading-5',
  disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
};

export default function useSelect(props: SelectProps) {
  const { onChangeSelection, options, className, multiple, disabled, children, ...other } = props;

  // const {
  //   theme: { select },
  // } = useContext(ThemeContext);

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
