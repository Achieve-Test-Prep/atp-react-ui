import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const ModalFooter = ({ children, className, ...other }: DivProps) => {
  const { modalFooter } = useTheme();

  const cls = twMerge(modalFooter.base, className);

  return (
    <footer className={cls} {...other}>
      {children}
    </footer>
  );
};
