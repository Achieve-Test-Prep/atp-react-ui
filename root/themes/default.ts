import button from './buttons';
import { modalHeader, modalFooter, modalBody, modal } from './modal';
import { text } from './text';

export default {
  text,
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5 bg-gray-50 border border-outline text-accent-light',
    withClose: 'pr-12',
    success: '',
    error: '',
    warning: '',
    neutral: '',
    info: '',

    icon: {
      base: 'h-5 w-5',
      success: 'text-success',
      error: 'text-error',
      warning: 'text-warning',
      neutral: 'text-accent-light',
      info: 'text-info',
    },
  },

  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600',
  },
  // TableFooter
  tableFooter: {
    base: 'px-4 py-3 border-t bg-gray-50 text-gray-500',
  },
  // TableRow
  tableRow: {
    base: '',
  },
  // TableHeader
  tableHeader: {
    base: 'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50',
  },
  // TableContainer
  tableContainer: {
    base: 'w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5',
  },
  // TableCell
  tableCell: {
    base: 'px-4 py-3',
  },
  // TableBody
  tableBody: {
    base: 'bg-white divide-y text-accent-light',
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: 'mb-2 last:mb-0',
  },
  // Dropdown
  dropdown: {
    base: 'min-w-max-content absolute z-10 mt-2 w-56 rounded-lg border border-gray-100 bg-white px-6 py-4 text-accent-light shadow-md',
    align: {
      left: 'left-0',
      right: 'right-0',
    },
  },

  // Avatar
  avatar: {
    base: 'relative rounded-full inline-block',
    size: {
      lg: 'w-10 h-10',
      base: 'w-8 h-8',
      sm: 'w-6 h-6',
    },
  },

  // Modal
  modal,
  // ModalBody
  modalBody,
  // ModalFooter
  modalFooter,
  // ModalHeader
  modalHeader,

  // Badge
  badge: {
    base: 'inline-flex font-medium leading-5 rounded-full',
    size: {
      sm: 'text-[0.625rem] px-1.5',
      base: 'text-xs px-2',
      lg: 'text-sm px-2.5',
    },

    as: {
      light: {
        success: 'text-success-medium bg-success-x-light',
        error: 'text-error bg-error-x-light',
        warning: 'text-warning-dark bg-warning-x-light',
        info: 'text-info bg-info-x-light',
        neutral: 'text-accent-light bg-gray-75',
        primary: 'text-primary bg-primary-x-light',
      },
      base: {
        success: 'text-white bg-success',
        error: 'text-white bg-error',
        warning: 'text-accent-light bg-warning',
        info: 'text-white bg-info',
        neutral: 'text-accent-light bg-gray-75',
        primary: 'text-primary bg-primary-light',
      },
    },
  },

  // Backdrop
  backdrop: {
    base: 'fixed inset-0 z-30 flex items-end bg-gray-overlay/20 sm:items-center sm:justify-center',
  },

  // Textarea
  textarea: {
    base: 'block w-full text-sm border-outline border rounded-lg focus:outline-none placeholder:text-accent-light/50',
    active: 'focus-visible:outline-none focus:border-primary focus:ring focus:ring-primary-light',
    disabled: 'disabled:cursor-not-allowed disabled:bg-gray-50',
  },

  // Select
  select: {
    base: 'block w-full p-2.5 text-sm text-accent-light focus:outline-none rounded-lg',
    active: 'focus:border-primary border-outline focus:ring focus:ring-primary-light',
    select: 'leading-5',
    disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
    valid: 'border-success focus:border-success focus:ring focus:ring-green-200/60',
    invalid: 'border-error focus:border-error focus:ring focus:ring-red-200/60',
  },

  // Label
  label: {
    base: 'block text-sm font-normal leading-tight tracking-[0.16px] text-accent-light',
  },

  // Input
  input: {
    base: 'block w-full placeholder:text-accent-light/50 rounded-lg border border-outline p-2.5 text-sm leading-5 text-accent-light focus:outline-none',
    active: 'focus:border-primary focus:ring focus:ring-primary-light',
    disabled: 'disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50',
  },

  checkbox: {
    active: 'focus:border-primary focus:ring focus:ring-primary-light focus:outline-none focus:ring-offset-0',
    disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
    base: 'text-primary cursor-pointer form-checkbox rounded border-outline',
  },

  // Radio
  radio: {
    base: 'form-radio cursor-pointer text-primary',
    active:
      'border-outline focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0',
    disabled:
      'disabled:text-accent-disabled hover:disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50',
  },

  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-success',
    invalid: 'text-error',
  },

  // Card
  card: {
    base: 'min-w-0 flex flex-col rounded-lg shadow-card overflow-hidden bg-white',
  },

  cardBody: {
    base: 'px-4 py-5 sm:px-6',
  },

  // Button
  button,

  spinner: {
    base: 'relative inline-block flex-shrink-0 rounded-full border-primary after:absolute after:rounded-full after:bg-white',
    size: {
      xs: 'after:-left-1 after:top-1 after:h-1 after:w-1 h-4 w-4 border-4',
      sm: 'after:-left-1.5 after:top-1 after:h-1.5 after:w-1.5 h-6 w-6 border-[0.375rem]',
      base: 'after:-left-2 after:top-2 after:h-2 after:w-2 h-8 w-8 border-8',
    },
  },
};
