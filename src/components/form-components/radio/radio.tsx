import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../../themes';

import type { RadioGroupProps, RadioProps } from './types';

const RadioItemsGroup = forwardRef<ElementRef<RadioGroupProps>, ComponentPropsWithoutRef<RadioGroupProps>>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root className={twMerge('grid gap-2', className)} {...props} ref={ref} />
  )
);

RadioItemsGroup.displayName = 'RadioItemsGroup';

const RadioItem = forwardRef<ElementRef<RadioProps>, ComponentPropsWithoutRef<RadioProps>>(
  ({ className, children, ...props }, ref) => {
    const { radio } = useTheme();
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={twMerge(radio.base, radio.active, radio.disabled, className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-2.5 fill-current text-current"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);

RadioItem.displayName = 'RadioItem';

export { RadioItemsGroup, RadioItem };
