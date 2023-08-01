import { useRef } from 'react';

export function useIsInitialized(): boolean {
  const isFirst = useRef(false);

  if (!isFirst.current) {
    isFirst.current = true;
    return false;
  }

  return isFirst.current;
}
