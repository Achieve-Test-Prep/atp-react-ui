import React from 'react';

import { Icon } from '../icon';
import { Spinner } from '../progress';

import type { ButtonProps } from './types';
import { useButton } from './use-button';

export const Button = ({ ...props }: ButtonProps) => {
  const {
    tag,
    type,
    IconLeft,
    IconRight,
    buttonStyles,
    iconLeftStyles,
    iconRightStyles,
    showLoader,
    disabled,
    children,
    loaderSize,
    other,
  } = useButton(props);

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      disabled,
      type,
      ...other,
    },
    IconLeft ? <Icon className={iconLeftStyles} icon={IconLeft} /> : null,
    children || null,
    IconRight ? <Icon className={iconRightStyles} icon={IconRight} /> : null,
    showLoader ? (
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-hidden={true}
      >
        <Spinner size={loaderSize} />
      </div>
    ) : null
  );
};
