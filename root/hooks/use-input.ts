import { ChangeEvent, useState } from 'react';

export default function useInput<T>(
  init: T
): [
  state: T,
  inputCallback: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => void,
  updateState: (o: Partial<T>) => void,
] {
  const [state, setState] = useState<T>({ ...init });

  const inputCallback = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!name) {
      console.warn('Please define the name attribute on target element');
    }
    setState((s) => ({ ...s, [name]: value }));
  };

  const updateState = (o: Partial<T>) => {
    setState((s) => ({ ...s, ...o }));
  };

  return [state, inputCallback, updateState];
}
