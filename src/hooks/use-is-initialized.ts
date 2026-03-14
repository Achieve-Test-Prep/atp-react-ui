import { useRef } from 'react';

export function useIsInitialized(): boolean {
  const isFirst = useRef(false);

  // eslint-disable-next-line react-hooks/refs
  if (!isFirst.current) {
    isFirst.current = true;
    return false;
  }

  // eslint-disable-next-line react-hooks/refs
  return isFirst.current;
}
