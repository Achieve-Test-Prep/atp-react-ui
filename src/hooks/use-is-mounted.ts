import { EffectCallback, useEffect } from 'react';

function useIsMounted(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}

export default useIsMounted;
