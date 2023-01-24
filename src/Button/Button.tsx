import React from 'react';

import type { ButtonProps, Ref } from './types';
import { useButton } from './use-button';
import { Icon } from '../Icon';
import { Spinner } from '../Progress';

const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
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
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft ? React.createElement(Icon, { className: iconLeftStyles, icon: IconLeft }) : null,
    children || null,
    IconRight ? React.createElement(Icon, { className: iconRightStyles, icon: IconRight }) : null,
    showLoader
      ? React.createElement(
          'div',
          {
            className: 'absolute inset-0 z-10 flex items-center justify-center',
            'aria-hidden': true,
          },
          React.createElement(Spinner, { size: loaderSize })
        )
      : null
  );
});

export default Button;
