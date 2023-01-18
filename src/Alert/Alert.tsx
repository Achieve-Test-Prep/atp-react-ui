import React, { useContext } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { Button } from '../Button';
import { ThemeContext } from '../themes/theme-context';
import { SuccessIcon, WarningIcon, DangerIcon, InfoIcon, NeutralIcon } from './alert-icons';
import type { AlertProps } from './types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { className, children, type = 'neutral', onClose, ...other } = props;
  const {
    theme: { alert },
  } = useContext(ThemeContext);

  const baseStyle = alert.base;
  const withCloseStyle = alert.withClose;
  const typeStyle = alert[type];
  const iconBaseStyle = alert.icon.base;
  const iconTypeStyle = alert.icon[type];

  let Icon;
  switch (type) {
    case 'success':
      Icon = SuccessIcon;
      break;
    case 'warning':
      Icon = WarningIcon;
      break;
    case 'error':
      Icon = DangerIcon;
      break;
    case 'info':
      Icon = InfoIcon;
      break;
    case 'neutral':
      Icon = NeutralIcon;
      break;
    default:
      Icon = NeutralIcon;
  }

  const cls = classNames(baseStyle, typeStyle, onClose && withCloseStyle, className);

  const iconCls = twMerge(iconBaseStyle, iconTypeStyle, 'absolute left-0 top-0 ml-4 mt-4');
  const closeCls = twMerge(
    iconBaseStyle,
    iconTypeStyle,
    'absolute top-0 right-0 mt-4 mr-4 hover:bg-gray-overlay/10 focus:ring-primary-medium'
  );

  return (
    <div className={cls} role="alert" ref={ref} {...other}>
      {onClose && (
        <Button icon="XMarkIcon" className={closeCls} size="xs" as="link" aria-label="close" onClick={onClose} />
      )}
      <Icon className={iconCls} />
      {children}
    </div>
  );
});

export default Alert;
