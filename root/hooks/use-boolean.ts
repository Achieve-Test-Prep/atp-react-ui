import { useMemo, useState } from 'react';

import useConst from './use-const';

/** Updater callbacks returned by `useBoolean`. */
export interface IUseBooleanCallbacks {
  /** Set the value to true. Always has the same identity. */
  setTrue: () => void;
  /** Set the value to false. Always has the same identity. */
  setFalse: () => void;
  /** Toggle the value. Always has the same identity. */
  toggle: () => void;

  set: (v: boolean) => void;
}

/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
export function useBoolean(initialState = false): [boolean, IUseBooleanCallbacks] {
  const [value, setValue] = useState(initialState);

  const setTrue = useConst(() => () => {
    setValue(true);
  });
  const setFalse = useConst(() => () => {
    setValue(false);
  });
  const toggle = useConst(() => () => {
    setValue((currentValue) => !currentValue);
  });

  const set = useConst(() => (v: boolean) => {
    setValue(v);
  });

  const setFun = useMemo(() => ({ setTrue, setFalse, toggle, set }), [setFalse, setTrue, toggle, set]);

  return [value, setFun];
}
