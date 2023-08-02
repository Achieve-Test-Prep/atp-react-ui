// import { ThemeSizeStyle, ThemeStyleType } from './types';

// export type ButtonVariantType = 'outline' | 'link' | 'contained' | 'dropdownItem';
// type ButtonStateType = 'base' | 'active' | 'disabled';
// type ButtonIconStyle = ThemeSizeStyle & {
//   left: string;
//   right: string;
// };

// type ButtonVariantStyleType = ThemeStyleType<ButtonVariantType, ThemeStyleType<ButtonStateType>>;

// export type ButtonStyle = ButtonVariantStyleType & {
//   base: string;
//   disabled: string;
//   active: string;
//   block: string;
//   size: ThemeSizeStyle;
//   icon: ButtonIconStyle;
//   modal: ThemeStyleType<'base', string>;
// };

export const buttonStyles = {
  base: 'relative inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap border border-transparent align-bottom font-medium leading-5 leading-none tracking-[0.16px] outline-none transition-colors duration-150',
  disabled: 'disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50 disabled:text-outline',
  active: 'focus:ring-2 focus:ring-primary-light',
  block: 'w-full',

  size: {
    lg: 'rounded-lg px-10 py-3.5 text-sm',
    base: 'rounded-lg px-5 py-2.5 text-sm',
    md: 'rounded-lg px-5 py-2 text-sm',
    sm: 'rounded-lg px-4 py-[0.4375rem] text-xs',
    xs: 'rounded-md px-3 py-[0.1875rem] text-xs',

    icon: {
      lg: 'rounded-xl p-3.5 text-base',
      base: 'rounded-xl p-2.5 text-base',
      md: 'rounded-xl p-2 text-sm',
      sm: 'rounded-xl p-[0.3125rem] text-sm',
      xs: 'rounded-lg p-px text-xs',
      pagination: 'rounded-md px-1 py-0.5 text-sm',
    },

    pagination: 'rounded-md px-3 py-1 text-xs',
  },

  // styles applied to the SVG icon
  icon: {
    lg: 'h-5 w-5',
    base: 'h-5 w-5',
    md: 'h-5 w-5',
    sm: 'h-5 w-5',
    xs: 'h-4 w-4',

    left: 'mr-2 -ml-1',
    right: 'ml-2 -mr-1',

    // Missing style? Because apparently its used in use-button
    pagination: '',
  },

  contained: {
    base: 'text-white bg-primary',
    active: 'hover:brightness-95 active:hover:brightness-95',
    disabled: 'disabled:hover:brightness-100 disabled:active:hover:brightness-100',
  },

  link: {
    base: 'border text-accent-light shadow-sm',
    active: 'hover:bg-primary-x-light hover:text-primary hover:shadow-none active:bg-transparent',
    disabled: '',
  },

  outline: {
    base: 'text-accent-light border-outline tb:text-gray-400 focus:border-primary',
    active: 'active:bg-transparent hover:text-primary hover:border-primary active:border-primary',
    disabled: '',
  },

  // this is the button that lives inside the DropdownItem
  dropdownItem: {
    base: 'relative focus:ring-primary border-0 text-accent-light inline-flex items-center cursor-pointer w-full px-4 py-2.5 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-primary-x-light hover:text-primary tb:hover:bg-gray-800 tb:hover:text-gray-200',
    active: '',
    disabled: '',
  },

  modal: {
    base: 'w-full md:w-auto',
  },

  themeColor: {
    dark: {
      contained: 'bg-accent text-white',
      link: 'text-accent-light',
      outline: 'text-accent-light border-outline',
      // Missing style? Because apparently its used in use-button
      dropdownItem: '',
    },

    primary: {
      contained: 'text-white bg-primary',
      link: 'text-primary',
      outline: 'text-primary border-primary',
      dropdownItem: '',
    },

    secondary: {
      contained: 'text-white bg-secondary',
      link: 'text-secondary',
      outline: 'text-secondary border-secondary',
      dropdownItem: '',
    },

    success: {
      contained: 'bg-success text-white',
      link: 'text-success',
      outline: 'text-success-medium border-success',
      dropdownItem: '',
    },

    error: {
      contained: 'bg-error text-white',
      link: 'text-error',
      outline: 'text-error border-error',
      dropdownItem: '',
    },

    info: {
      contained: 'bg-info text-white',
      link: 'text-info',
      outline: 'text-info border-info',
      dropdownItem: '',
    },

    warning: {
      contained: 'bg-warning text-accent',
      link: 'text-warning',
      outline: 'text-warning-dark border-warning',
      dropdownItem: '',
    },

    /*
     ** Below are missing when using them in use-theme
     ** line 127: theme ? button.themeColor?.[theme][as] : undefined,
     */
    pagination: {
      contained: '',
      link: '',
      outline: '',
    },
  },
};
