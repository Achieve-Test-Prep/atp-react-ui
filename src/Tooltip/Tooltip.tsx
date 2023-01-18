import React, { FC, PropsWithChildren, useContext } from 'react';

import Tippy from '@tippyjs/react';

import { ThemeContext } from '../themes/theme-context';
import { TooltipProps } from './types';

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

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  disabled,
  placement = 'top',
  className,
  ...props
}) => {
  const {
    theme: { text },
  } = useContext(ThemeContext);

  return (
    <Tippy
      {...props}
      offset={[0, 4]}
      duration={50}
      placement={placement}
      className={`${className} ${
        placements[placement as keyof typeof placements]
      }  rounded-md bg-gray-50 text-accent-light px-2 py-1 shadow-card ${text.tooltip}`}
    >
      <div>{children}</div>
    </Tippy>
  );
};
