import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import type { ThemeMode } from '../types';

const THEME_KEY = 'theme';

type UseThemeModeParam = {
  preferredMode?: ThemeMode;
  usePreferences?: boolean;
};
type UseThemeModeReturnType = Readonly<[ThemeMode | null, ((_: ThemeMode) => void) | null, () => void]>;

export const useThemeMode = ({ preferredMode, usePreferences = true }: UseThemeModeParam): UseThemeModeReturnType => {
  const [mode, setMode] = useState<ThemeMode>(null);

  const toggleMode = useCallback(() => {
    setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const userPreferenceDark = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedThemeMode = (window.localStorage.getItem(THEME_KEY) as ThemeMode) || 'light';
    // use stored theme; fallback to user preference
    if (preferredMode) {
      setMode(preferredMode);
    } else if (usePreferences) {
      setMode(userPreferenceDark ? 'dark' : 'light');
    } else {
      setMode(storedThemeMode);
    }
  }, [preferredMode, usePreferences]);

  useLayoutEffect(() => {
    if (mode) {
      window.localStorage.setItem(THEME_KEY, mode);
      document.documentElement.className = '';
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  if (!usePreferences) return [null, null, () => {}] as const;

  return [mode, setMode, toggleMode] as const;
};
