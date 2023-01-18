import React, { ChangeEvent, useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';
import { Label } from '../Typography';
import { ISelectOption, SelectProps } from './types';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
  const {
    valid,
    onChangeSelection,
    options,
    children,
    className,
    multiple,
    label,
    labelClassName,
    disabled,
    ...other
  } = props;

  const {
    theme: { select },
  } = useContext(ThemeContext);

  function hasValidation(iValid: boolean | undefined) {
    return iValid !== undefined;
  }

  function validationStyle(iValid: boolean | undefined): string {
    if (hasValidation(iValid)) {
      return valid ? select.valid : select.invalid;
    }
    return '';
  }

  const cls = twMerge(
    select.base,
    // don't apply activeStyle if has valid or disabled
    select.active,
    // don't apply disabledStyle if has valid
    select.disabled,
    validationStyle(valid),
    !multiple && select.select,
    className
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const item = options.find((i) => i.value === e.target.value);
    onChangeSelection(item as ISelectOption);
  };

  return (
    <div>
      <Label className={labelClassName}>{label}</Label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <select onChange={handleChange} className={cls} ref={ref} disabled={disabled} multiple={!!multiple} {...other}>
          {children ||
            options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
});

export default Select;
