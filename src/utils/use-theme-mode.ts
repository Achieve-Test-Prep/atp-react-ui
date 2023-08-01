import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const THEME_KEY = 'theme';

export const useThemeMode = (usePreferences: boolean) => {
  const [mode, setMode] = useState<Mode>(null);

  const toggleMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }, [mode]);

  useEffect(() => {
    const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedThemeMode = window.localStorage.getItem(THEME_KEY) as Mode;
    // use stored theme; fallback to user preference
    setMode(storedThemeMode || (userPreference ? 'dark' : 'light'));
  }, []);

  useLayoutEffect(() => {
    if (mode) {
      window.localStorage.setItem(THEME_KEY, mode);
      document.documentElement.className = '';
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  if (!usePreferences) return [null, null, null];

  return [mode, setMode, toggleMode] as const;
};