import { forwardRef, ElementRef, ComponentPropsWithoutRef, useContext } from 'react';

import CheckIcon from '@heroicons/react/24/outline/CheckIcon';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

import { ThemeContext } from '../themes/theme-context';

import { CheckboxProps } from './types';

const Checkbox = forwardRef<ElementRef<CheckboxProps>, ComponentPropsWithoutRef<CheckboxProps>>(
  ({ className, ...props }, ref) => {
    const {
      theme: { checkbox },
    } = useContext(ThemeContext);

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={twMerge(checkbox.base, checkbox.checked, checkbox.active, checkbox.disabled, className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={twMerge('flex items-center justify-center')}>
          <CheckIcon className="-mt-px h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
