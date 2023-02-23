export default {
  text: {
    h1: 'font-sans text-2xl font-semibold leading-tight',
    h2: 'font-sans text-xl font-semibold leading-tight',
    h3: 'font-serif text-xl font-normal leading-tight tracking-wide tb:text-gray-400',
    h4: 'font-serif text-lg font-normal leading-tight tracking-tight tb:text-gray-400',
    h5: 'font-serif text-base font-normal leading-tight tb:text-gray-400',
    h6: 'font-serif text-sm font-semibold leading-tight tb:text-gray-400',
    subheading: 'font-sans text-sm font-normal italic leading-tight',
    subtitle: 'font-sans text-xl font-medium leading-tight',
    'subtitle-small': 'font-sans text-xs font-semibold leading-tight',
    p: 'font-sans text-accent text-xs font-normal leading-normal tb:text-gray-400',
    'p-small': 'font-sans font-normal leading-normal text-[0.625rem]',
    caption: 'tracking-[0.16px] font-sans text-xs font-normal leading-tight',
    'caption-medium': 'tracking-[0.16px] font-sans text-sm font-normal leading-tight',
    'caption-medium-bold': 'tracking-[0.16px] font-sans text-sm font-medium leading-tight',
    'caption-large': 'tracking-[0.16px] font-sans text-lg font-normal leading-tight',
    overline: 'tracking-[0.16px] font-sans text-xs font-normal leading-tight underline',
    'overline-medium': 'font-sans text-xs font-medium leading-tight',
    tooltip: 'tracking-[0.16px] font-sans font-normal leading-tight text-[0.625rem]',
  },
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
    base: 'absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content tb:text-gray-300 tb:border-gray-700 tb:bg-gray-700',
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
  modal: {
    base: 'w-full z-40 px-6 py-4 overflow-hidden bg-white rounded-t-lg tb:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl',
  },
  // ModalBody
  modalBody: {
    base: 'mb-6 text-sm text-accent-light tb:text-gray-400',
  },
  // ModalFooter
  modalFooter: {
    base: 'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 tb:bg-gray-800',
  },
  // ModalHeader
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-accent-light tb:text-gray-300',
  },

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
    base: 'block text-sm tracking-[0.16px] font-normal leading-tight text-accent-light tb:text-gray-400',
    // checkbox and radio get this same style
    checkbox: 'inline-flex items-center cursor-pointer',
    disabled: 'cursor-not-allowed',
  },

  // Input
  input: {
    base: 'block w-full p-2.5 focus:outline-none text-sm text-accent-light tb:text-gray-300 leading-5 rounded-lg',
    active:
      'focus:border-primary border-outline tb:border-outline focus:ring focus:ring-primary-light tb:focus:border-outline tb:focus:ring-gray-300 tb:bg-gray-700',
    disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
    valid:
      'border-success tb:bg-gray-700 focus:border-success tb:focus:border-success focus:ring focus:ring-green-200 tb:focus:ring-green-200',
    invalid:
      'border-error tb:bg-gray-700 focus:border-error tb:focus:border-error focus:ring focus:ring-red-200 tb:focus:ring-red-200',
    radio:
      'cursor-pointer text-primary form-radio focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0 tb:focus:ring-gray-300',
  },

  // Checkbox
  checkbox: {
    active:
      'focus:border-primary border-outline tb:border-outline focus:ring focus:ring-primary-light tb:focus:border-outline tb:focus:ring-gray-300 tb:bg-gray-700',
    disabled: 'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline',
    valid:
      'border-success tb:bg-gray-700 focus:border-success tb:focus:border-success focus:ring focus:ring-green-200 tb:focus:ring-green-200',
    invalid:
      'border-error tb:bg-gray-700 focus:border-error tb:focus:border-error focus:ring focus:ring-red-200 tb:focus:ring-red-200',
    base: 'mr-3 text-primary cursor-pointer form-checkbox focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0 rounded tb:focus:ring-gray-300',
  },

  // Radio
  radio: {
    active:
      'focus:border-primary border-outline tb:border-outline focus:ring focus:ring-primary-light tb:focus:border-outline tb:focus:ring-gray-300 tb:bg-gray-700',
    disabled:
      'disabled:cursor-not-allowed disabled:text-accent-disabled disabled:bg-gray-50 disabled:border-outline hover:disabled:text-accent-disabled',
    valid:
      'border-success tb:bg-gray-700 focus:border-success tb:focus:border-success focus:ring focus:ring-green-200 tb:focus:ring-green-200',
    invalid:
      'border-error tb:bg-gray-700 focus:border-error tb:focus:border-error focus:ring focus:ring-red-200 tb:focus:ring-red-200',
    base: 'mr-3 cursor-pointer text-primary form-radio focus:border-primary focus:outline-none focus:ring focus:ring-primary-light focus:ring-offset-0 tb:focus:ring-gray-300',
  },

  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-success tb:text-success',
    invalid: 'text-error tb:text-error',
  },

  // Card
  card: {
    base: 'min-w-0 flex flex-col rounded-lg shadow-card overflow-hidden',
    default: 'bg-white tb:bg-gray-800',
  },

  cardBody: {
    base: 'p-4',
  },

  // Button
  button: {
    base: 'relative leading-none font-medium tracking-[0.16px] whitespace-nowrap select-none align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150',
    disabled: 'disabled:cursor-not-allowed disabled:text-outline disabled:bg-gray-50 disabled:border-outline',
    active: 'focus:ring focus:outline-none',
    block: 'w-full',

    size: {
      lg: 'px-10 py-3.5 rounded-lg text-sm',
      base: 'px-5 py-2.5 rounded-lg text-sm',
      md: 'px-5 py-2 rounded-lg text-sm',
      sm: 'px-4 py-[0.4375rem] rounded-lg text-xs',
      xs: 'px-3 py-[0.1875rem] rounded-md text-xs',

      icon: {
        lg: 'p-3.5 rounded-xl text-base',
        base: 'p-2.5 rounded-xl text-base',
        md: 'p-2 rounded-xl text-sm',
        sm: 'p-[0.3125rem] rounded-xl text-sm',
        xs: 'p-px rounded-lg text-xs',
        pagination: 'px-1 py-0.5 text-sm rounded-md',
      },

      pagination: 'px-3 py-1 rounded-md text-xs',
    },

    // styles applied to the SVG icon
    icon: {
      lg: 'h-5 w-5',
      base: 'h-5 w-5',
      md: 'h-5 w-5',
      sm: 'h-5 w-5',
      xs: 'h-5 w-5',

      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },

    primary: {
      base: 'text-white bg-primary border border-transparent',
      active: 'active:hover:brightness-95 hover:brightness-95 focus:ring-primary-light',
      disabled: 'disabled:active:hover:brightness-100 disabled:hover:brightness-100',
    },

    outline: {
      base: 'text-accent-light border-outline border tb:text-gray-400',
      active:
        'active:bg-transparent hover:text-primary focus:text-primary hover:border-primary focus:border-primary active:border-primary focus:ring focus:ring-primary-light',
      disabled: '',
    },

    link: {
      base: 'text-accent-light tb:text-gray-400 border border-transparent',
      active:
        'active:bg-transparent shadow-sm hover:text-primary hover:bg-primary-x-light focus:ring-primary-light tb:hover:bg-gray-500 tb:hover:text-gray-300/10',
      disabled: '',
    },

    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base: 'relative focus:ring-primary-light text-accent-light inline-flex items-center cursor-pointer w-full px-2 py-2.5 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-primary-x-light hover:text-primary tb:hover:bg-gray-800 tb:hover:text-gray-200',
    },
  },

  spinner: {
    base: 'relative inline-block flex-shrink-0 rounded-full border-primary after:absolute after:rounded-full after:bg-white',
    size: {
      xs: 'after:-left-1 after:top-1 after:h-1 after:w-1 h-4 w-4 border-4',
      sm: 'after:-left-1.5 after:top-1 after:h-1.5 after:w-1.5 h-6 w-6 border-[0.375rem]',
      base: 'after:-left-2 after:top-2 after:h-2 after:w-2 h-8 w-8 border-8',
    },
  },
};
