import React, { useEffect, useContext, useState } from 'react';

import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { ThemeContext } from '../themes/theme-context';
import { Transition } from '../Transition';
import { ModalProps } from './types';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
  const { children, onClose, isOpen, disableInternalClosing = false, ...other } = props;

  const {
    theme: { modal },
  } = useContext(ThemeContext);

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      handleOnClose();
    }
  }

  const handleOnClose = () => {
    if (onClose && !disableInternalClosing) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true });
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalComponent = (
    <Transition show={isOpen}>
      <>
        <Transition
          enter="transition ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={handleOnClose}>
            <Transition
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 transform translate-y-1/2"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 transform translate-y-1/2"
            >
              <div className={modal.base} role="dialog" onClick={(e) => e.stopPropagation()} ref={ref} {...other}>
                <FocusLock returnFocus>
                  <header className="flex justify-end">
                    {onClose && (
                      <Button
                        icon="XMarkIcon"
                        size="xs"
                        as="link"
                        disabled={disableInternalClosing}
                        aria-label="close"
                        onClick={handleOnClose}
                      />
                    )}
                  </header>
                  {children}
                </FocusLock>
              </div>
            </Transition>
          </Backdrop>
        </Transition>
      </>
    </Transition>
  );

  return mounted ? createPortal(modalComponent, document.body) : null;
});

export default Modal;
