import { useCallback, useLayoutEffect, useState } from 'react';

import type { ThemeMode } from '../types';

const THEME_KEY = 'theme';

type UseThemeModeParam = {
  preferredMode?: Omit<ThemeMode, 'system'>;
  usePreferences?: boolean;
};

type UseThemeModeReturnType = Readonly<[ThemeMode, (mode: ThemeMode) => void, () => void]>;

export const useThemeMode = ({ preferredMode, usePreferences = true }: UseThemeModeParam): UseThemeModeReturnType => {
  const getDefaultThemeMode = useCallback((): ThemeMode => {
    if (usePreferences) {
      window.localStorage.setItem(THEME_KEY, 'system');
    }
    return (window.localStorage.getItem(THEME_KEY) as ThemeMode) || 'light';
  }, [usePreferences]);

  const [mode, setMode] = useState<ThemeMode>(getDefaultThemeMode());

  const getSystemThemeMode = useCallback(
    () => (!!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    []
  );

  const changeThemeMode = useCallback(
    (_mode: ThemeMode) => {
      if (!usePreferences) {
        window.localStorage.setItem(THEME_KEY, _mode);
        setMode(_mode);
      }
    },
    [usePreferences]
  );

  const toggleMode = useCallback(() => {
    if (!usePreferences) {
      changeThemeMode(mode === 'light' ? 'dark' : 'light');
    }
  }, [changeThemeMode, mode, usePreferences]);

  useLayoutEffect(() => {
    const storedThemeMode = getDefaultThemeMode();

    let modeToApply = mode;
    let modeToSave = mode;

    if (preferredMode) {
      modeToApply = preferredMode as ThemeMode;
      modeToSave = preferredMode as ThemeMode;
    } else if (usePreferences) {
      modeToApply = getSystemThemeMode();
      modeToSave = 'system';
    } else if (storedThemeMode === 'system') {
      modeToApply = getSystemThemeMode();
      modeToSave = storedThemeMode;
    }

    document.documentElement.className = modeToApply;
    window.localStorage.setItem(THEME_KEY, modeToSave);
  }, [preferredMode, usePreferences, mode, getSystemThemeMode, getDefaultThemeMode]);

  return [mode, changeThemeMode, toggleMode] as const;
};
