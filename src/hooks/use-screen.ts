import { useState } from 'react';

import { useEventListener } from './use-event-listener';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

type WindowSize = {
  width: number;
  height: number;
};

// Confusing name; Can be useDimensions | useScreenSize
export function useScreen(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}
