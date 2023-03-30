import { useEffect } from 'react';

import useConst from './use-const';

export type UseSetIntervalReturnType = {
  setInterval: (callback: () => void, duration: number) => number;
  clearInterval: (id: number) => void;
};

/**
 *  Returns a wrapper function for `setInterval` which automatically handles disposal.
 */
export const useSetInterval = (): UseSetIntervalReturnType => {
  const intervalIds = useConst<Record<number, number>>({});

  useEffect(
    () => () => {
      const keys = Object.keys(intervalIds);
      keys.forEach((id) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        clearTimeout(intervalIds[id as any]);
      });
    },
    // useConst ensures this will never change, but react-hooks/exhaustive-deps doesn't know that
    [intervalIds]
  );

  return useConst({
    setInterval: (func: () => void, duration: number): number => {
      const id = setInterval(func, duration) as unknown as number;

      intervalIds[id] = 1;

      return id;
    },

    clearInterval: (id: number): void => {
      delete intervalIds[id];
      clearInterval(id);
    },
  });
};
