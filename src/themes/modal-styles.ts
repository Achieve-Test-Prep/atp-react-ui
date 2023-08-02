// Modal
import { twSort } from '../utils';

import { h5, captionMedium } from './text-styles';

export const modalStyles = {
  base: twSort`tb:bg-gray-800 w-full transform overflow-hidden rounded-t-lg bg-white px-6 py-4 shadow-lg transition-all md:m-4 md:max-w-xl md:rounded-lg`,
};
// ModalBody
export const modalBodyStyles = {
  base: twSort`mb-6 mt-4 ${captionMedium} tb:text-gray-400 text-accent-light`,
};
// ModalFooter
export const modalFooterStyles = {
  base: twSort`tb:bg-gray-800 -mx-6 -mb-4 flex flex-col items-center justify-start space-y-4 bg-gray-25 px-6 py-3 md:flex-row md:items-end md:space-x-4 md:space-y-0`,
};
// ModalHeader
export const modalHeaderStyles = {
  base: twSort`mt-4 ${h5} text-accent-primary tb:text-gray-300`,
};
