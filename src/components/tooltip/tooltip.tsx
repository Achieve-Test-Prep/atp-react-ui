import type { PropsWithChildren } from 'react';

import Tippy from '@tippyjs/react';

import { useTheme } from '../../themes/use-theme';

import type { TooltipProps } from './types';

const placements = {
  // default
  top: '',
  'top-start': 'rounded-bl-none',
  'top-end': 'rounded-br-none',

  right: '',
  'right-start': 'rounded-tl-none',
  'right-end': 'rounded-bl-none',

  bottom: '',
  'bottom-start': 'rounded-tl-none',
  'bottom-end': 'rounded-tr-none',

  left: '',
  'left-start': 'rounded-tr-none',
  'left-end': 'rounded-br-none',
};

export function Tooltip({
  children,
  disabled,
  placement = 'top',
  className,
  zIndex,
  ...props
}: PropsWithChildren<TooltipProps>) {
  const { text } = useTheme();

  return (
    <Tippy
      {...props}
      offset={[0, 4]}
      duration={50}
      zIndex={zIndex ?? 2}
      placement={placement}
      className={`${className} ${
        placements[placement as keyof typeof placements]
      } text-accent-light shadow-card rounded-md bg-gray-50 px-2 py-1 ${text.tooltip}`}
    >
      <div>{children}</div>
    </Tippy>
  );
}
