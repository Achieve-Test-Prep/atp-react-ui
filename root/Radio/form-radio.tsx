import { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { RadioItem, RadioItemsGroup } from './Radio';

const FormRadioItemsGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label: string;
    labelClassName?: string;
    formItemClassName?: string;
  }
>(({ labelClassName, formItemClassName, label, ...props }, ref) => (
  <FormItem className={twMerge('space-y-3', formItemClassName)}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <RadioItemsGroup ref={ref} className="flex flex-col space-y-1" {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
));

FormRadioItemsGroup.displayName = 'FormRadioItemsGroup';

type TRadioItem = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  label?: string;
  labelClassName?: string;
  formItemClassName?: string;
};

const FormRadioItem = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, TRadioItem>(
  ({ label, labelClassName, formItemClassName, ...props }, ref) => (
    <FormItem className={twMerge('flex items-center space-x-3 space-y-0', formItemClassName)}>
      <FormControl>
        <RadioItem ref={ref} {...props} />
      </FormControl>
      <FormLabel className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}>
        {label ?? props.value}
      </FormLabel>
    </FormItem>
  )
);

FormRadioItem.displayName = 'FormRadioItem';

export { FormRadioItemsGroup, FormRadioItem };
