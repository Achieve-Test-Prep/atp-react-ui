import { useContext } from 'react';

import { twMerge } from 'tailwind-merge';

import { SpinnerProps } from '../Progress/types';
import { ThemeContext } from '../themes/theme-context';
import warn from '../utils/warning';

import type { ButtonProps } from './types';

export default function useButton(props: ButtonProps) {
  const {
    tag = 'button',
    // Fix https://github.com/estevanmaito/atp-react-ui/issues/7
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    size = 'base',
    as = 'primary',
    block = false,
    modal = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    showLoader,
    iconClassName,
    ...other
  } = props;
  const {
    theme: { button },
  } = useContext(ThemeContext);

  const hasIcon = !!icon || !!iconLeft || !!iconRight;
  const btnAs = button?.[as] ?? {};

  /**
   * Only used in Pagination.
   * Not meant for general use.
   */
  const btnSize = button.size[size];
  const btnIconSize = button.size.icon[size];

  warn(
    hasIcon && !other['aria-label'] && !children,
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  );

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */

  const buttonStyles = twMerge(
    as === '__dropdownItem'
      ? button.dropdownItem.base
      : twMerge(
          button.base,
          // has icon but no children
          hasIcon && !children && btnIconSize,
          // has icon and children
          hasIcon && children && btnSize,
          // does not have icon
          !hasIcon && btnSize,
          btnAs.base,
          block ? button.block : null,
          modal ? button.modal.base : null
        ),
    `${btnAs.disabled} ${button.disabled}`,
    `${btnAs.active} ${button.active}`,
    className
  );

  const iconLeftStyles = twMerge(button.icon[size], children ? button.icon.left : '', iconClassName);
  const iconRightStyles = twMerge(button.icon[size], children ? button.icon.right : '', iconClassName);
  const loaderSize = (size === 'xs' || size === 'pagination' ? 'xs' : 'sm') as SpinnerProps['size'];

  return {
    tag,
    type,
    IconLeft,
    IconRight,
    buttonStyles,
    iconLeftStyles,
    iconRightStyles,
    disabled: disabled || showLoader,
    showLoader,
    children,
    loaderSize,
    other,
  };
}
