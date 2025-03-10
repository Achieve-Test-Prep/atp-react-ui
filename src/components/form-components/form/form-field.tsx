import { useMemo } from 'react';

import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { FormFieldContext } from './form-item-context';

export function FormField<
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
