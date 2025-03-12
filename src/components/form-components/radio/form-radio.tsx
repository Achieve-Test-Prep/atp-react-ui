import type { ElementRef, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { RadioItem, RadioItemsGroup } from './radio';
import type { RadioGroupProps, RadioProps } from './types';

const FormRadioItemsGroup = forwardRef<
  ElementRef<RadioGroupProps>,
  ComponentPropsWithoutRef<RadioGroupProps> & FormLabelProps
>(({ labelClassName, formItemClassName, label, ...props }, ref) => (
  <FormItem className={twMerge('space-y-3', formItemClassName)}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <RadioItemsGroup
        ref={ref}
        className="flex flex-col space-y-1"
        {...props}
      />
    </FormControl>
    <FormMessage />
  </FormItem>
));

FormRadioItemsGroup.displayName = 'FormRadioItemsGroup';

type TRadioItem = ComponentPropsWithoutRef<RadioProps> & FormLabelProps;

const FormRadioItem = forwardRef<ElementRef<RadioProps>, TRadioItem>(
  ({ label, labelClassName, formItemClassName, ...props }, ref) => (
    <FormItem
      className={twMerge(
        'flex flex-row items-center justify-start space-y-0 space-x-3',
        formItemClassName
      )}
    >
      <FormControl>
        <RadioItem ref={ref} {...props} />
      </FormControl>
      {(label || props.value) && (
        <FormLabel
          className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}
        >
          {label ?? props.value}
        </FormLabel>
      )}
    </FormItem>
  )
);

FormRadioItem.displayName = 'FormRadioItem';

export { FormRadioItemsGroup, FormRadioItem };
