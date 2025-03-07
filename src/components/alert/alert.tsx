import React from 'react';

import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';
import EllipsisHorizontalCircleIcon from '@heroicons/react/24/outline/EllipsisHorizontalCircleIcon';
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';
import XCircleIcon from '@heroicons/react/24/outline/XCircleIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../themes';
import { Button } from '../button';
import { Icon } from '../icon';

import type { AlertProps } from './types';

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { className, children, type = 'neutral', onClose, ...other } = props;
    const { alert } = useTheme();

    let icon;
    switch (type) {
      case 'success':
        icon = CheckCircleIcon;
        break;
      case 'warning':
        icon = XCircleIcon;
        break;
      case 'error':
        icon = ExclamationCircleIcon;
        break;
      case 'info':
        icon = InformationCircleIcon;
        break;
      case 'neutral':
      default:
        icon = EllipsisHorizontalCircleIcon;
    }

    const cls = twMerge(
      alert.base,
      alert[type],
      onClose && alert.withClose,
      className
    );

    const iconCls = twMerge(
      alert.icon.base,
      alert.icon[type],
      'absolute left-0 top-0 ml-4 mt-4'
    );
    const closeCls = twMerge(
      alert.icon.base,
      alert.icon[type],
      'hover:bg-gray-overlay/10 focus:ring-primary-medium absolute right-0 top-0 mr-4 mt-4'
    );

    return (
      <div className={cls} role="alert" ref={ref} {...other}>
        {onClose && (
          <Button
            icon={XMarkIcon}
            className={closeCls}
            size="xs"
            as="link"
            aria-label="close"
            onClick={onClose}
          />
        )}
        <Icon icon={icon} className={iconCls} />
        {children}
      </div>
    );
  }
);
