import { twSort } from '../utils';

export const buttonStyles = {
  base: twSort`relative inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap border border-transparent align-bottom font-medium leading-5 leading-none tracking-[0.16px] outline-none transition-colors duration-150`,
  disabled: twSort`disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50 disabled:text-outline`,
  active: twSort`focus:ring-2 focus:ring-primary-light`,
  block: twSort`w-full`,

  size: {
    lg: twSort`rounded-lg px-10 py-3.5 text-sm`,
    base: twSort`rounded-lg px-5 py-2.5 text-sm`,
    md: twSort`rounded-lg px-5 py-2 text-sm`,
    sm: twSort`rounded-lg px-4 py-[0.4375rem] text-xs`,
    xs: twSort`rounded-md px-3 py-[0.1875rem] text-xs`,

    icon: {
      lg: twSort`rounded-xl p-3.5 text-base`,
      base: twSort`rounded-xl p-2.5 text-base`,
      md: twSort`rounded-xl p-2 text-sm`,
      sm: twSort`rounded-xl p-[0.3125rem] text-sm`,
      xs: twSort`rounded-lg p-px text-xs`,
      pagination: twSort`rounded-md px-1 py-0.5 text-sm`,
    },

    pagination: twSort`rounded-md px-3 py-1 text-xs`,
  },

  // styles applied to the SVG icon
  icon: {
    lg: twSort`size-5`,
    base: twSort`size-5`,
    md: twSort`size-5`,
    sm: twSort`size-5`,
    xs: twSort`size-4`,

    left: twSort`-ml-1 mr-2`,
    right: twSort`-mr-1 ml-2`,

    // Missing style? Because apparently its used in use-button
    pagination: twSort``,
  },

  contained: {
    base: twSort`bg-primary text-white`,
    active: twSort`hover:brightness-95 active:hover:brightness-95`,
    disabled: twSort`disabled:hover:brightness-100 disabled:active:hover:brightness-100`,
  },

  link: {
    base: twSort`border text-accent-light shadow-sm`,
    active: twSort`hover:bg-primary-x-light hover:text-primary hover:shadow-none active:bg-transparent`,
    disabled: twSort``,
  },

  outline: {
    base: twSort`border-outline text-accent-light focus:border-primary`,
    active: twSort`hover:border-primary hover:text-primary active:border-primary active:bg-transparent`,
    disabled: twSort``,
  },

  // this is the button that lives inside the DropdownItem
  dropdownItem: {
    base: twSort`relative inline-flex w-full cursor-pointer items-center rounded-md border-0 px-4 py-2.5 text-sm font-medium text-accent-light transition-colors duration-150 hover:bg-primary-x-light hover:text-primary focus:ring-primary`,
    active: twSort``,
    disabled: twSort``,
  },

  modal: {
    base: twSort`w-full md:w-auto`,
  },

  themeColor: {
    dark: {
      contained: twSort`bg-accent text-white`,
      link: twSort`text-accent-light`,
      outline: twSort`border-outline text-accent-light`,
      // Missing style? Because apparently its used in use-button
      dropdownItem: twSort``,
    },

    primary: {
      contained: twSort`bg-primary text-white`,
      link: twSort`text-primary`,
      outline: twSort`border-primary text-primary`,
      dropdownItem: twSort``,
    },

    secondary: {
      contained: twSort`bg-secondary text-white`,
      link: twSort`text-secondary`,
      outline: twSort`border-secondary text-secondary`,
      dropdownItem: twSort``,
    },

    success: {
      contained: twSort`bg-success text-white`,
      link: twSort`text-success`,
      outline: twSort`border-success text-success-medium`,
      dropdownItem: twSort``,
    },

    error: {
      contained: twSort`bg-error text-white`,
      link: twSort`text-error`,
      outline: twSort`border-error text-error`,
      dropdownItem: twSort``,
    },

    info: {
      contained: twSort`bg-info text-white`,
      link: twSort`text-info`,
      outline: twSort`border-info text-info`,
      dropdownItem: twSort``,
    },

    warning: {
      contained: twSort`bg-warning text-accent`,
      link: twSort`text-warning`,
      outline: twSort`border-warning text-warning-dark`,
      dropdownItem: twSort``,
    },

    /*
     ** Below are missing when using them in use-theme
     ** line 127: theme ? button.themeColor?.[theme][as] : undefined,
     */
    pagination: {
      contained: twSort``,
      link: twSort``,
      outline: twSort``,
    },
  },
};
