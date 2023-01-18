import { ReactNode } from 'react';

import { IconName } from '../Icon/types';

type IconType = IconName;
// | string
// | React.FunctionComponent<React.PropsWithChildren<{ className: string; 'aria-hidden': boolean }>>
// | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

export interface Props {
  children?: React.ReactNode;
  /**
   * shows loader and disables the button
   */
  showLoader?: boolean;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'pagination';
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType;
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType;
  /**
   * The style of the button
   */
  as?: 'outline' | 'link' | 'primary' | '__dropdownItem';
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button';
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a';
}

export interface ButtonAsOtherProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps;

export type Ref = ReactNode | HTMLElement | string;
