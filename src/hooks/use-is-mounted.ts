import type { EffectCallback } from 'react';
import { useEffect } from 'react';

export function useIsMounted(effect: EffectCallback) {
  useEffect(effect, []);
}
