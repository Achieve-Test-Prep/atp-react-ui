import { twSort } from '../utils';

import { buttonStyles } from './button-styles';
import * as ModalStyles from './modal-styles';
import { textStyles } from './text-styles';

export const defaultTheme = {
  text: textStyles,
  // Alert
  alert: {
    base: twSort`relative rounded-lg border border-outline bg-gray-50 p-4 pl-12 leading-5 text-accent-light`,
    withClose: twSort`pr-12`,
    success: twSort``,
    error: twSort``,
    warning: twSort``,
    neutral: twSort``,
    info: twSort``,

    icon: {
      base: twSort`h-5 w-5`,
      success: twSort`text-success`,
      error: twSort`text-error`,
      warning: twSort`text-warning`,
      neutral: twSort`text-accent-light`,
      info: twSort`text-info`,
    },
  },

  // Pagination
  pagination: {
    base: twSort`flex flex-col justify-between text-xs text-gray-600 sm:flex-row`,
  },
  // TableFooter
  tableFooter: {
    base: twSort`border-t bg-gray-50 px-4 py-3 text-gray-500`,
  },
  // TableRow
  tableRow: {
    base: twSort``,
  },
  // TableHeader
  tableHeader: {
    base: twSort`border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500`,
  },
  // TableContainer
  tableContainer: {
    base: twSort`w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5`,
  },
  // TableCell
  tableCell: {
    base: twSort`px-4 py-3`,
  },
  // TableBody
  tableBody: {
    base: twSort`divide-y bg-white text-accent-light`,
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: twSort`mb-2 last:mb-0`,
  },
  // Dropdown
  dropdown: {
    base: twSort`min-w-max-content absolute z-10 mt-2 w-56 rounded-lg border border-gray-100 bg-white px-6 py-4 text-accent-light shadow-md`,
    align: {
      left: twSort`left-0`,
      right: twSort`right-0`,
    },
  },

  // Avatar
  avatar: {
    base: twSort`relative inline-block rounded-full`,
    size: {
      lg: twSort`h-10 w-10`,
      base: twSort`h-8 w-8`,
      sm: twSort`h-6 w-6`,
    },
  },

  // Modal
  modal: ModalStyles.modalStyles,
  // ModalBody
  modalBody: ModalStyles.modalBodyStyles,
  // ModalFooter
  modalFooter: ModalStyles.modalFooterStyles,
  // ModalHeader
  modalHeader: ModalStyles.modalHeaderStyles,

  // Badge
  badge: {
    base: twSort`inline-flex rounded-full font-medium leading-5`,
    size: {
      sm: twSort`px-1.5 text-[0.625rem]`,
      base: twSort`px-2 text-xs`,
      lg: twSort`px-2.5 text-sm`,
    },

    as: {
      light: {
        success: twSort`bg-success-x-light text-success-medium`,
        error: twSort`bg-error-x-light text-error`,
        warning: twSort`bg-warning-x-light text-warning-dark`,
        info: twSort`bg-info-x-light text-info`,
        neutral: twSort`bg-gray-75 text-accent-light`,
        primary: twSort`bg-primary-x-light text-primary`,
      },
      base: {
        success: twSort`bg-success text-white`,
        error: twSort`bg-error text-white`,
        warning: twSort`bg-warning text-accent-light`,
        info: twSort`bg-info text-white`,
        neutral: twSort`bg-gray-75 text-accent-light`,
        primary: twSort`bg-primary-light text-primary`,
      },
    },
  },

  // Backdrop
  backdrop: {
    base: twSort`fixed inset-0 z-30 flex items-end bg-gray-overlay/20 sm:items-center sm:justify-center`,
  },

  // Textarea
  textarea: {
    base: twSort`block w-full rounded-lg border border-outline text-sm placeholder:text-accent-light/50 focus:outline-none`,
    active: twSort`focus:border-primary focus:ring focus:ring-primary-light focus-visible:outline-none`,
    disabled: twSort`disabled:cursor-not-allowed disabled:bg-gray-50`,
  },

  // Select
  select: {
    base: twSort`block w-full rounded-lg p-2.5 text-sm text-accent-light focus:outline-none`,
    active: twSort`border-outline focus:border-primary focus:ring focus:ring-primary-light`,
    select: twSort`leading-5`,
    disabled: twSort`disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50`,
  },

  // Label
  label: {
    base: twSort`block text-sm font-normal leading-tight tracking-[0.16px] text-accent-light`,
  },

  // Input
  input: {
    base: twSort`block w-full rounded-lg border border-outline p-2.5 text-sm leading-5 text-accent-light placeholder:text-accent-light/50 focus:outline-none`,
    active: twSort`focus:border-primary focus:ring focus:ring-primary-light`,
    disabled: twSort`disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50`,
  },

  checkbox: {
    active: twSort`focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0`,
    disabled: twSort`disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50`,
    base: twSort`form-checkbox cursor-pointer rounded border-outline text-primary`,
  },

  // Radio
  radio: {
    base: twSort`form-radio cursor-pointer text-primary`,
    active: twSort`border-outline focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0`,
    disabled: twSort`disabled:text-accent-disabled hover:disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50`,
  },

  // HelperText
  helperText: {
    base: twSort`text-xs`,
    valid: twSort`text-success`,
    invalid: twSort`text-error`,
  },

  // Card
  card: {
    base: twSort`flex min-w-0 flex-col rounded-lg bg-white shadow-card`,
  },

  cardBody: {
    base: twSort`px-4 py-5 sm:px-6`,
  },

  // Button
  button: buttonStyles,

  spinner: {
    base: twSort`relative inline-block flex-shrink-0 rounded-full border-primary after:absolute after:rounded-full after:bg-white`,
    size: {
      xs: twSort`h-4 w-4 border-4 after:-left-1 after:top-1 after:h-1 after:w-1`,
      sm: twSort`h-6 w-6 border-[0.375rem] after:-left-1.5 after:top-1 after:h-1.5 after:w-1.5`,
      base: twSort`h-8 w-8 border-8 after:-left-2 after:top-2 after:h-2 after:w-2`,
    },
  },
};

export type AtpThemeType = typeof defaultTheme;
