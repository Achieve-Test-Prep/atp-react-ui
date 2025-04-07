import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';

import type { HelperTextProps } from './types';

export const HelperText = ({
  children,
  valid,
  className,
  ...other
}: HelperTextProps) => {
  const { helperText } = useTheme();

  const validationStyle = (iValid: boolean | undefined): string => {
    switch (iValid) {
      case true:
        return helperText.valid;
      case false:
        return helperText.invalid;
      default:
        return '';
    }
  };

  const cls = twMerge(helperText.base, validationStyle(valid), className);

  return (
    <span className={cls} {...other}>
      {children}
    </span>
  );
};
