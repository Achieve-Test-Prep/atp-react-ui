import { ReactNode } from 'react';

import { SvgIconProps } from '../icon/types';

type IconType = SvgIconProps;
// | string
// | React.FunctionComponent<React.PropsWithChildren<{ className: string; 'aria-hidden': boolean }>>
// | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

type Props = {
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
  as?: 'outline' | 'link' | 'contained' | '__dropdownItem';
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
  /**
   * Shows the button within footer of modal
   */
  modal?: boolean;
  /**
   * Shows the button as a block (full width)
   */
  iconClassName?: string;

  /**
   * theme color
   */
  theme?: 'dark' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export type ButtonAsButtonProps = Props &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * The element that should be rendered as a button
     */
    tag?: 'button';
    /**
     * The native HTML button type
     */
    type?: 'button' | 'submit' | 'reset';
  };

export type ButtonAsAnchorProps = Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    tag: 'a';
  };

export type ButtonAsOtherProps = Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    tag: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps;

export type Ref = ReactNode | HTMLElement | string;
