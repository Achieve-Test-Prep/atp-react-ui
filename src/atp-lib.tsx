import React, { useLayoutEffect, useMemo } from 'react';

import '@animxyz/core';

import defaultTheme from './themes/default';
import { ThemeContext } from './themes/theme-context';
import type { DivProps } from './types';
import { mergeDeep } from './utils/merge-deep';
import useDarkMode from './utils/use-dark-mode';

interface Props extends DivProps {
  children: React.ReactNode;
  /**
   * Defines the styles used throughout the library
   */
  theme?: object;
  /**
   * Defines dark mode as the default theme
   */
  dark?: boolean;
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  usePreferences?: boolean;
}

export const AtpLib: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  theme: customTheme,
  dark,
  usePreferences = false,
}) => {
  const mergedTheme = mergeDeep(defaultTheme, customTheme);
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences);

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }
      document.documentElement.classList.add(`dark`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
