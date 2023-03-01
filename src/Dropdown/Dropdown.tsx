import React, { useEffect, useContext, useRef } from 'react';

import FocusLock from 'react-focus-lock';
import { twMerge } from 'tailwind-merge';

import { AnimatedDiv } from '../animations';
import { ThemeContext } from '../themes/theme-context';

import type { DropdownProps } from './types';

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(props, ref) {
  const { children, onClose, isOpen, className, align = 'right', ...other } = props;
  const {
    theme: { dropdown },
  } = useContext(ThemeContext);

  function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose(e);
    }
  }

  const dropdownRef = useRef<HTMLUListElement>(null);
  function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      onClose(e);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, { capture: true });
    document.addEventListener('keydown', handleEsc, { capture: true });
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cls = twMerge(dropdown.base, dropdown.align[align], className);

  return (
    <AnimatedDiv isOpen={isOpen} animated={{ mode: 'out-in', xyz: 'fade down duration-2 small' }} ref={ref}>
      <FocusLock returnFocus>
        <ul className={cls} ref={dropdownRef} aria-label="submenu" {...other}>
          {children}
        </ul>
      </FocusLock>
    </AnimatedDiv>
  );
});

export default Dropdown;
