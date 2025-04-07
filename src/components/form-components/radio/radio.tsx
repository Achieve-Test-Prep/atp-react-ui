import type { ComponentProps } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../../themes';

import type { RadioGroupProps, RadioProps } from './types';

const RadioItemsGroup = ({
  className,
  ...props
}: ComponentProps<RadioGroupProps>) => (
  <RadioGroupPrimitive.Root
    className={twMerge('grid gap-2', className)}
    {...props}
  />
);

const RadioItem = ({
  className,
  children,
  ...props
}: ComponentProps<RadioProps>) => {
  const { radio } = useTheme();
  if (children) {
    console.log('RadioItem must have children');
  }
  return (
    <RadioGroupPrimitive.Item
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
};

export { RadioItemsGroup, RadioItem };
