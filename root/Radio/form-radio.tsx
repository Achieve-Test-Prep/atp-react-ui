import { ElementRef, ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import { FormControl, FormItem, FormLabel, FormMessage } from '../Form';

import { RadioItem, RadioItemsGroup } from './Radio';
import { RadioGroupProps, RadioProps } from './types';

const FormRadioItemsGroup = forwardRef<
  ElementRef<RadioGroupProps>,
  ComponentPropsWithoutRef<RadioGroupProps> & {
    /**
     * Shows the label of the input
     */
    label?: ReactNode;
    /**
     * Shows the label of the input
     */
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

type TRadioItem = ComponentPropsWithoutRef<RadioProps> & {
  /**
   * Shows the label of the input
   */
  label?: ReactNode;
  /**
   * Shows the label of the input
   */
  labelClassName?: string;

  formItemClassName?: string;
};

const FormRadioItem = forwardRef<ElementRef<RadioProps>, TRadioItem>(
  ({ label, labelClassName, formItemClassName, ...props }, ref) => (
    <FormItem className={twMerge('flex flex-row items-center justify-start space-x-3 space-y-0', formItemClassName)}>
      <FormControl>
        <RadioItem ref={ref} {...props} />
      </FormControl>
      {(label || props.value) && (
        <FormLabel className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}>
          {label ?? props.value}
        </FormLabel>
      )}
    </FormItem>
  )
);

FormRadioItem.displayName = 'FormRadioItem';

export { FormRadioItemsGroup, FormRadioItem };
