import type { ComponentPropsWithoutRef, ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

import { FormControl, FormItem, FormLabel, FormMessage } from '../form';
import type { FormLabelProps } from '../types';

import { RadioItem, RadioItemsGroup } from './radio';
import type { RadioGroupProps, RadioProps } from './types';

const FormRadioItemsGroup = ({
  labelClassName,
  formItemClassName,
  label,
  ...props
}: ComponentProps<RadioGroupProps> & FormLabelProps) => (
  <FormItem className={twMerge('space-y-3', formItemClassName)}>
    {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
    <FormControl>
      <RadioItemsGroup className="flex flex-col space-y-1" {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);

type TRadioItem = ComponentPropsWithoutRef<RadioProps> & FormLabelProps;

const FormRadioItem = ({
  label,
  labelClassName,
  formItemClassName,
  ...props
}: TRadioItem) => (
  <FormItem
    className={twMerge(
      'flex flex-row items-center justify-start space-y-0 space-x-3',
      formItemClassName
    )}
  >
    <FormControl>
      <RadioItem {...props} />
    </FormControl>
    {(label || props.value) && (
      <FormLabel
        className={`cursor-pointer disabled:cursor-not-allowed ${labelClassName}`}
      >
        {label ?? props.value}
      </FormLabel>
    )}
  </FormItem>
);

export { FormRadioItemsGroup, FormRadioItem };
