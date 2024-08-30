import type { PropsWithChildren } from 'react';
import { forwardRef, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import { Backdrop } from '../backdrop';
import { Button } from '../button';

import type { ModalProps } from './types';

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>((props, ref) => {
  const {
    children,
    onClose,
    open,
    className,
    disableInternalClosing = false,
    hideCloseButton = false,
    backDropProps = {},
    ...other
  } = props;

  const { modal } = useTheme();
  const cls = twMerge(modal.base, className);

  const handleClose = () => {
    if (!disableInternalClosing) {
      onClose(false);
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" ref={ref} className="relative z-20" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop {...backDropProps} />
        </Transition.Child>

        <section className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center md:items-center md:justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel {...other} className={cls}>
                {!hideCloseButton && (
                  <Button
                    icon={XMarkIcon}
                    size="sm"
                    as="link"
                    disabled={disableInternalClosing}
                    aria-label="close"
                    onClick={handleClose}
                    className="absolute right-4 top-4"
                  />
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </section>
      </Dialog>
    </Transition>
  );
});
