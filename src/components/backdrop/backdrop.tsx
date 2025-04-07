import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import type { DivProps } from '../../types';

export const Backdrop = ({ className, ...other }: DivProps) => {
  const { backdrop } = useTheme();

  const cls = twMerge(backdrop.base, className);

  return <section className={cls} {...other} />;
};
