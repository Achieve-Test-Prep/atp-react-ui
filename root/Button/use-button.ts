import { useContext, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';

import { SpinnerProps } from '../Progress/types';
import { ThemeContext } from '../themes/theme-context';
import warn from '../utils/warning';

import type { ButtonProps } from './types';

export default function useButton(props: ButtonProps) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    theme = 'dark',
    size = 'base',
    as = 'contained',
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
  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  warn(
    hasIcon && !other['aria-label'] && !children,
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  );

  const { buttonStyles, iconLeftStyles, iconRightStyles, loaderSize } = useMemo(
    () =>
      helper({
        button,
        theme,
        hasChildren: !!children,
        block,
        className,
        iconClassName,
        modal,
        as,
        size,
        hasIcon,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, theme, block, className, iconClassName, modal, as, size, hasIcon]
  );

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

type helperProps = ButtonProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  button: any;
  hasChildren: boolean;
  hasIcon: boolean;
};

function helper({
  button,
  className,
  iconClassName,
  theme = 'dark',
  size = 'base',
  as = 'contained',
  block,
  modal,
  hasChildren,
  hasIcon,
}: helperProps) {
  const btnAs = button?.[as] ?? {};

  /**
   * Only used in Pagination.
   * Not meant for general use.
   */
  const btnSize = button.size[size];
  const btnIconSize = button.size.icon[size];

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
          hasIcon && !hasChildren && btnIconSize,
          // has icon and children
          hasIcon && hasChildren && btnSize,
          // does not have icon
          !hasIcon && btnSize,
          btnAs.base,
          block ? button.block : null,
          modal ? button.modal.base : null
        ),
    `${btnAs.disabled} ${button.disabled}`,
    `${btnAs.active} ${button.active}`,

    theme ? button.themeColor?.[theme][as] : undefined,
    className
  );

  const iconLeftStyles = twMerge(button.icon[size], hasChildren ? button.icon.left : '', iconClassName);
  const iconRightStyles = twMerge(button.icon[size], hasChildren ? button.icon.right : '', iconClassName);
  const loaderSize = (size === 'xs' || size === 'pagination' ? 'xs' : 'sm') as SpinnerProps['size'];

  return {
    buttonStyles,
    iconLeftStyles,
    iconRightStyles,
    loaderSize,
  };
}
