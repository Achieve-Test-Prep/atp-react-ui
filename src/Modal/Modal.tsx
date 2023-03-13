import { forwardRef, Fragment, PropsWithChildren, useContext } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { ThemeContext } from '../themes/theme-context';

import { ModalProps } from './types';

const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>((props, ref) => {
  const {
    children,
    onClose,
    open,
    className,
    disableInternalClosing = false,
    hideCloseButton = false,
    ...other
  } = props;

  const {
    theme: { modal },
  } = useContext(ThemeContext);
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
          <Backdrop />
        </Transition.Child>

        <section className="z-40 fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center items-end md:items-center md:justify-center">
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
                    icon="XMarkIcon"
                    size="xs"
                    as="link"
                    disabled={disableInternalClosing}
                    aria-label="close"
                    onClick={handleClose}
                    className="absolute right-6 top-4"
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

export default Modal;
