import type { HTMLAttributes, ComponentProps } from 'react';
import { useId, useMemo } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { FormProvider } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import type { DivProps } from '../../../types';
import { Text, Label } from '../../typography';
import type { LabelProps } from '../../typography/types';

import { FormItemContext } from './form-item-context';
import { useFormField } from './use-form-field';

const Form = FormProvider;

const FormItem = ({ className, ...props }: DivProps) => {
  const id = useId();
  const idValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext value={idValue}>
      <div className={twMerge('space-y-1.5', className)} {...props} />
    </FormItemContext>
  );
};

const FormLabel = ({ className, ...props }: ComponentProps<LabelProps>) => {
  const { formItemId } = useFormField();
  return <Label className={className} htmlFor={formItemId} {...props} />;
};

const FormControl = (props: ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
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
};

const FormMessage = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={twMerge('text-error text-xs', className)}
      {...props}
    >
      {body}
    </p>
  );
};

const FormDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField();

  return (
    <Text
      as="caption"
      id={formDescriptionId}
      className={twMerge('text-accent-light', className)}
      {...props}
    />
  );
};

export { Form, FormItem, FormControl, FormLabel, FormDescription, FormMessage };
