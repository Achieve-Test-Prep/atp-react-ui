import button from './buttons';
import { modalHeader, modalFooter, modalBody, modal } from './modal';
import { text } from './text';

export default {
  text,
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5 bg-gray-75 text-accent-light',
    withClose: 'pr-12',
    success: 'tb:bg-green-600 tb:text-white',
    error: 'tb:bg-red-600 tb:text-white',
    warning: 'tb:bg-yellow-600 tb:text-white',
    neutral: 'tb:bg-gray-700 tb:text-gray-300',
    info: 'tb:bg-blue-600 tb:text-white',

    icon: {
      base: 'h-5 w-5',
      success: 'text-success tb:text-green-300',
      error: 'text-error tb:text-red-300',
      warning: 'text-warning tb:text-yellow-100',
      neutral: 'text-accent-light tb:text-gray-500',
      info: 'text-info tb:text-blue-300',
    },
  },
  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600 tb:text-gray-400',
  },
  // TableFooter
  tableFooter: {
    base: 'px-4 py-3 border-t tb:border-gray-700 bg-gray-50 text-gray-500 tb:text-gray-400 tb:bg-gray-800',
  },
  // TableRow
  tableRow: {
    base: '',
  },
  // TableHeader
  tableHeader: {
    base: 'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b tb:border-gray-700 bg-gray-50 tb:text-gray-400 tb:bg-gray-800',
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
    base: 'bg-white divide-y tb:divide-gray-700 tb:bg-gray-800 text-accent-light tb:text-gray-400',
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: 'mb-2 last:mb-0',
  },
  // Dropdown
  dropdown: {
    base: 'min-w-max-content tb:text-gray-300 tb:border-gray-700 tb:bg-gray-700 absolute z-10 mt-2 w-56 rounded-lg border border-gray-100 bg-white px-6 py-4 text-accent-light shadow-md',
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
        success: 'text-success-medium bg-success-x-light tb:bg-green-700 tb:text-green-100',
        error: 'text-error bg-error-x-light tb:text-red-100 tb:bg-red-700',
        warning: 'text-warning-dark bg-warning-x-light tb:text-white tb:bg-orange-600',
        info: 'text-info bg-info-x-light tb:text-white tb:bg-orange-600',
        neutral: 'text-accent-light bg-gray-75 tb:text-gray-100 tb:bg-gray-700',
        primary: 'text-primary bg-primary-x-light tb:text-white tb:bg-purple-600',
      },
      base: {
        success: 'text-white bg-success tb:bg-green-700 tb:text-green-100',
        error: 'text-white bg-error tb:text-red-100 tb:bg-red-700',
        warning: 'text-accent-light bg-warning tb:text-white tb:bg-orange-600',
        info: 'text-white bg-info tb:text-white tb:bg-orange-600',
        neutral: 'text-accent-light bg-gray-75 tb:text-gray-100 tb:bg-gray-700',
        primary: 'text-primary bg-primary-light tb:text-white tb:bg-purple-600',
      },
    },
  },

  // Backdrop
  backdrop: {
    base: 'fixed inset-0 z-30 flex items-end bg-gray-overlay/20 sm:items-center sm:justify-center',
  },

  // Textarea
  textarea: {
    base: 'block w-full text-sm tb:text-gray-300 rounded-md focus:outline-none',
    active:
      'focus-visible:outline-none focus:border-primary border-outline tb:border-outline tb:focus:border-outline tb:bg-gray-700 tb:focus:ring-gray-300 focus:ring focus:ring-primary-light',
    disabled: 'cursor-not-allowed bg-gray-50 tb:bg-gray-800',
    valid:
      'border-green-600 tb:bg-gray-700 focus:border-success tb:focus:border-success focus:ring focus:ring-green-200 tb:focus:ring-green-200',
    invalid:
      'border-red-600 tb:bg-gray-700 focus:border-error tb:focus:border-error focus:ring focus:ring-red-200 tb:focus:ring-red-200',
  },

  // Select
  select: {
    base: 'block w-full p-2.5 text-sm text-accent-light focus:outline-none tb:text-gray-300 rounded-lg',
    active:
      'focus:border-primary border-outline tb:border-outline tb:bg-gray-700 focus:ring focus:ring-primary-light tb:focus:ring-gray-300 tb:focus:border-outline',
    select: 'leading-5',
    disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
    valid:
      'border-success tb:bg-gray-700 focus:border-success tb:focus:border-success focus:ring focus:ring-green-200/60 tb:focus:ring-green-200',
    invalid:
      'border-error tb:bg-gray-700 focus:border-error tb:focus:border-error focus:ring focus:ring-red-200/60 tb:focus:ring-red-200',
  },

  // Label
  label: {
    base: 'block text-sm font-normal leading-tight tracking-[0.16px] text-accent-light',
  },

  // Input
  input: {
    base: 'block w-full rounded-lg border border-outline p-2.5 text-sm leading-5 text-accent-light focus:outline-none',
    active: 'focus:border-primary focus:ring focus:ring-primary-light',
    disabled: 'disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50',
    valid: 'border-success focus:border-success focus:ring focus:ring-green-200',
    invalid: 'border-error focus:border-error focus:ring focus:ring-red-200',
  },

  // Checkbox
  checkbox: {
    base: 'form-checkbox shrink-0 cursor-pointer rounded border border-outline text-white',
    checked: 'data-[state=checked]:text-primary data-[state=checked]:border-primary',
    active: 'focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0',
    disabled: 'disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50',
  },

  // Radio
  radio: {
    base: 'form-radio cursor-pointer text-primary',
    active:
      'border-outline focus:border-primary focus:outline-none  focus:ring focus:ring-primary-light focus:ring-offset-0',
    disabled:
      'disabled:text-accent-disabled hover:disabled:text-accent-disabled disabled:cursor-not-allowed disabled:border-outline disabled:bg-gray-50',
  },

  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-success tb:text-success',
    invalid: 'text-error tb:text-error',
  },

  // Card
  card: {
    base: 'min-w-0 flex flex-col rounded-lg shadow-card overflow-hidden bg-white tb:bg-gray-800',
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
