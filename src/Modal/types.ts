import { ElementType } from 'react';

import { DialogProps, DialogTitleProps } from '@headlessui/react';
import { DescriptionProps } from '@headlessui/react/dist/components/description/description';

export type ModalProps = DialogProps<ElementType> & {
  /**
   * disables the internal closing mechanics
   */
  disableInternalClosing?: boolean;

  /**
   * show and hides the close button
   */
  hideCloseButton?: boolean;
};

export type ModalHeaderProps = DialogTitleProps<ElementType>;

export type ModalBodyProps = DescriptionProps;
