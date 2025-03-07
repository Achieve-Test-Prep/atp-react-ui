import type { ComponentProps, ElementType } from 'react';

import type { DialogProps, DialogTitleProps } from '@headlessui/react';
// import { Dialog } from '@headlessui/react';

import type { DivProps } from '../../types';

export type ModalProps = DialogProps<ElementType> & {
  /**
   * disables the internal closing mechanics
   */
  disableInternalClosing?: boolean;

  /**
   * show and hides the close button
   */
  hideCloseButton?: boolean;

  backDropProps?: DivProps;

  dialogClassName?: string;
};

export type ModalHeaderProps = DialogTitleProps<ElementType>;

export type ModalBodyProps = ComponentProps<ElementType>;
