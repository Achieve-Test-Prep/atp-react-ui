import type { ElementType } from 'react';

import type { DialogProps, DialogTitleProps } from '@headlessui/react';
import type { DescriptionProps } from '@headlessui/react/dist/components/description/description';

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
};

export type ModalHeaderProps = DialogTitleProps<ElementType>;

export type ModalBodyProps = DescriptionProps;
