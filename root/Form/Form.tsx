import {
  createContext,
  useContext,
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  useId,
  HTMLAttributes,
  useMemo,
} from 'react';

import { Slot } from '@radix-ui/react-slot';
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import type { DivProps } from '../types';
import { Text, Label } from '../Typography';
import type { LabelProps } from '../Typography/types';

import type { FormItemContextValue } from './types';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  const nameValue = useMemo(() => ({ name: props.name }), [props.name]);
  return (
    <FormFieldContext.Provider value={nameValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = forwardRef<HTMLDivElement, DivProps>(({ className, ...props }, ref) => {
  const id = useId();
  const idValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={idValue}>
      <div ref={ref} className={twMerge('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

const FormLabel = forwardRef<ElementRef<LabelProps>, ComponentPropsWithoutRef<LabelProps>>(
  ({ className, ...props }, ref) => {
    const { formItemId } = useFormField();

    return <Label ref={ref} className={className} htmlFor={formItemId} {...props} />;
  }
);

FormLabel.displayName = 'FormLabel';

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});

FormControl.displayName = 'FormControl';

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={twMerge('text-xs text-error', className)} {...props}>
        {body}
      </p>
    );
  }
);

FormMessage.displayName = 'FormMessage';

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
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
  }
);

FormDescription.displayName = 'FormDescription';

export { useFormField, Form, FormItem, FormControl, FormLabel, FormDescription, FormMessage, FormField };
