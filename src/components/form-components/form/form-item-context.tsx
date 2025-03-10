import { createContext } from 'react';

import type { FieldPath, FieldValues } from 'react-hook-form';

import type { FormItemContextValue } from './types';

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);
