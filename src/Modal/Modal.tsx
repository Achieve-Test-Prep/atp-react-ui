import React, { useEffect, useContext, useState } from 'react';

import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import { AnimatedDiv, Animated } from '../animations';
import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { ThemeContext } from '../themes/theme-context';

import type { ModalProps } from './types';

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
    <AnimatedDiv
      isOpen={isOpen}
      animated={{ appear: true, xyz: 'fade ease-out-back' }}
      className="fixed inset-0 z-20 flex items-end sm:items-center sm:justify-center"
    >
      <AnimatedDiv
        isOpen={isOpen}
        animated={{ appear: true, xyz: 'fade down' }}
        className={modal.base}
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        {...other}
      >
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
      </AnimatedDiv>

      {/* back drop */}
      <Animated appear xyz="fade ease-out-back">
        {isOpen && <Backdrop />}
      </Animated>
    </AnimatedDiv>
  );

  return mounted ? createPortal(modalComponent, document.body) : null;
});

export default Modal;
