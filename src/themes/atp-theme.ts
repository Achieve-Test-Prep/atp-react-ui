import { twSort } from '../utils';

import { buttonStyles } from './button-styles';
import * as ModalStyles from './modal-styles';
import { textStyles } from './text-styles';

export const atpTheme = {
  text: textStyles,
  // Alert
  alert: {
    base: twSort`border-outline text-accent-light relative rounded-lg border bg-gray-50 p-4 pl-12 leading-5`,
    withClose: twSort`pr-12`,
    success: twSort`border-green-200 bg-green-50`,
    error: twSort`border-red-200 bg-red-50`,
    warning: twSort`border-yellow-200 bg-yellow-50`,
    neutral: twSort``,
    info: twSort`border-blue-200 bg-blue-50`,

    icon: {
      base: twSort`size-5`,
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
    base: twSort`border-b bg-gray-50 text-left text-xs font-semibold tracking-wide text-gray-500 uppercase`,
  },
  // TableContainer
  tableContainer: {
    base: twSort`w-full overflow-hidden rounded-lg ring-1 ring-black/5`,
  },
  // TableCell
  tableCell: {
    base: twSort`px-4 py-3`,
  },
  // TableBody
  tableBody: {
    base: twSort`text-accent-light divide-y bg-white`,
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: twSort`mb-2 last:mb-0`,
  },
  // Dropdown
  dropdown: {
    base: twSort`min-w-max-content text-accent-light absolute z-10 mt-2 w-56 rounded-lg border border-gray-100 bg-white px-6 py-4 shadow-md`,
    align: {
      left: twSort`left-0`,
      right: twSort`right-0`,
    },
  },

  // Avatar
  avatar: {
    base: twSort`relative flex shrink-0 overflow-hidden rounded-full`,
    size: {
      lg: twSort`size-10`,
      base: twSort`size-8`,
      sm: twSort`size-6`,
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
    base: twSort`inline-flex rounded-full leading-5 font-medium`,
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
    base: twSort`bg-gray-overlay/60 fixed inset-0 z-30 flex items-end backdrop-blur-[2px] sm:items-center sm:justify-center`,
  },

  // Textarea
  textarea: {
    base: twSort`border-outline placeholder:text-accent-light/50 block w-full rounded-lg border text-sm focus:outline-hidden`,
    active: twSort`focus:border-primary focus:ring-primary-light focus:ring-3 focus-visible:outline-hidden`,
    disabled: twSort`disabled:cursor-not-allowed disabled:bg-gray-50`,
  },

  // Select
  select: {
    base: twSort`text-accent-light block w-full rounded-lg p-2.5 text-sm focus:outline-hidden`,
    active: twSort`border-outline focus:border-primary focus:ring-primary-light focus:ring`,
    select: twSort`leading-5`,
    disabled: twSort`disabled:text-accent-disabled disabled:border-outline disabled:cursor-not-allowed disabled:bg-gray-50`,
  },

  // Label
  label: {
    base: twSort`text-accent-light block text-sm leading-tight font-normal tracking-[0.16px]`,
  },

  // Input
  input: {
    base: twSort`border-input-border text-input-foreground placeholder:text-accent-light/50 block w-full rounded-lg border bg-transparent p-2.5 text-sm leading-5 outline-hidden`,
    active: twSort`focus:border-primary focus:ring-3 focus:ring-transparent focus:outline-hidden`,
    disabled: twSort`disabled:text-input-foreground-muted disabled:border-input-border disabled:bg-input-muted disabled:cursor-not-allowed`,
  },

  //
  checkbox: {
    active: twSort`focus:border-primary focus:ring-primary-light focus:ring-3 focus:ring-offset-0 focus:outline-hidden`,
    disabled: twSort`checked:disabled:border-primary disabled:text-accent-disabled disabled:border-border disabled:cursor-not-allowed disabled:bg-gray-50`,
    base: twSort`not-checked:disabled:bg-input-muted form-checkbox checked:disabled:bg-primary border-input-border text-primary cursor-pointer rounded-xs fill-transparent not-checked:bg-transparent`,
  },

  // Radio
  radio: {
    base: twSort`form-radio text-primary cursor-pointer`,
    active: twSort`border-outline focus:border-primary focus:ring-primary-light focus:ring-3 focus:ring-offset-0 focus:outline-hidden`,
    disabled: twSort`disabled:text-accent-disabled hover:disabled:text-accent-disabled disabled:border-outline disabled:cursor-not-allowed disabled:bg-gray-50`,
  },

  // HelperText
  helperText: {
    base: twSort`text-xs`,
    valid: twSort`text-success`,
    invalid: twSort`text-error`,
  },

  // Card
  card: {
    base: twSort`shadow-card bg-card text-card-foreground flex min-w-0 flex-col rounded-xl`,
  },

  cardBody: {
    base: twSort`px-6 py-5`,
  },

  // Button
  button: buttonStyles,

  spinner: {
    base: twSort`border-primary relative inline-block shrink-0 rounded-full after:absolute after:rounded-full after:bg-white`,
    size: {
      xs: twSort`size-4 border-4 after:top-1 after:-left-1 after:size-1`,
      sm: twSort`size-6 border-[0.375rem] after:top-1 after:-left-1.5 after:size-1.5`,
      base: twSort`size-8 border-8 after:top-2 after:-left-2 after:size-2`,
    },
  },
};

export type AtpThemeType = typeof atpTheme;
