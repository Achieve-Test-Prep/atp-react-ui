import type { PropsWithChildren } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import { Button } from '../button';

import type { ModalProps } from './types';

export const Modal = ({
  children,
  onClose,
  open,
  className,
  disableInternalClosing = false,
  hideCloseButton = false,
  backDropProps = {},
  dialogClassName,
  ...other
}: PropsWithChildren<ModalProps>) => {
  const { modal, backdrop } = useTheme();
  const cls = twMerge(modal.base, className);

  const handleClose = () => {
    if (!disableInternalClosing) {
      onClose(false);
    }
  };

  return (
    <Dialog
      as="div"
      open={open}
      className={twMerge(
        'relative z-999',
        'transition duration-300 ease-out data-closed:opacity-0',
        dialogClassName
      )}
      onClose={handleClose}
      transition
    >
      <DialogBackdrop transition {...backDropProps} className={backdrop.base} />

      <section className="fixed inset-0 z-40 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center md:items-center md:justify-center">
          <DialogPanel transition {...other} className={cls}>
            {!hideCloseButton && (
              <Button
                icon={XMarkIcon}
                size="sm"
                as="link"
                disabled={disableInternalClosing}
                aria-label="close"
                onClick={handleClose}
                className="absolute top-4 right-4"
              />
            )}
            {children}
          </DialogPanel>
        </div>
      </section>
    </Dialog>
  );
};
