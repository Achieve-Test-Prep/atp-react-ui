import type {
  ElementRef,
  ComponentPropsWithoutRef,
  HTMLAttributes,
} from 'react';
import { forwardRef, useId, useMemo } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { FormProvider } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import type { DivProps } from '../../../types';
import { Text, Label } from '../../typography';
import type { LabelProps } from '../../typography/types';

import { FormItemContext } from './form-item-context';
import { useFormField } from './use-form-field';

const Form = FormProvider;

const FormItem = forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => {
    const id = useId();
    const idValue = useMemo(() => ({ id }), [id]);

    return (
      <FormItemContext.Provider value={idValue}>
        <div
          ref={ref}
          className={twMerge('space-y-1.5', className)}
          {...props}
        />
      </FormItemContext.Provider>
    );
  }
);

FormItem.displayName = 'FormItem';

const FormLabel = forwardRef<
  ElementRef<LabelProps>,
  ComponentPropsWithoutRef<LabelProps>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField();

  return (
    <Label ref={ref} className={className} htmlFor={formItemId} {...props} />
  );
});

FormLabel.displayName = 'FormLabel';

const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});

FormControl.displayName = 'FormControl';

const FormMessage = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={twMerge('text-error text-xs', className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <Text
      as="caption"
      ref={ref}
      id={formDescriptionId}
      className={twMerge('text-accent-light', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export { Form, FormItem, FormControl, FormLabel, FormDescription, FormMessage };
