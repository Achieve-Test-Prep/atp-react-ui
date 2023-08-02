// Modal
import { h5, captionMedium } from './text-styles';

export const modalStyles = {
  base: 'tb:bg-gray-800 w-full transform overflow-hidden rounded-t-lg bg-white px-6 py-4 shadow-lg transition-all md:m-4 md:max-w-xl md:rounded-lg',
};
// ModalBody
export const modalBodyStyles = {
  base: `mb-6 mt-4 ${captionMedium} text-accent-light tb:text-gray-400`,
};
// ModalFooter
export const modalFooterStyles = {
  base: 'flex flex-col items-center md:items-end justify-start px-6 py-3 -mx-6 -mb-4 space-y-4 md:space-y-0 md:space-x-4 md:flex-row bg-gray-25 tb:bg-gray-800',
};
// ModalHeader
export const modalHeaderStyles = {
  base: `mt-4 ${h5} text-accent-primary tb:text-gray-300`,
};
