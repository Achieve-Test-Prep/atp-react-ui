import { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { RadioItem, RadioItemsGroup } from './Radio';

const FormRadioItemsGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label: string;
    labelClassName?: string;
  }
>(({ labelClassName, label, ...props }, ref) => (
  <FormItem className="space-y-3">
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
};

const FormRadioItem = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, TRadioItem>(
  ({ label, labelClassName, ...props }, ref) => (
    <FormItem className="flex items-center space-x-3 space-y-0">
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
