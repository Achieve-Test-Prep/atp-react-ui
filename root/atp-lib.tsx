import React, { PropsWithChildren, useLayoutEffect, useMemo } from 'react';

import defaultTheme from './themes/default';
import { AtpLibContext } from './themes/theme-context';
import type { DivProps } from './types';
import { mergeDeep } from './utils/merge-deep';
import useThemeMode from './utils/use-theme-mode';

/**
 * AtpLib is a React Component that provides theme configurations and functionality.
 * It uses the AtpLibContext to manage the themes and the dark mode status.
 *
 * @component
 * @example
 * return (
 *   <AtpLib theme={myTheme} dark={true} usePreferences={true}>
 *     <MyComponent />
 *   </AtpLib>
 * )
 *
 * @param {object} props - The properties that define the AtpLib Component
 * @param {React.ReactNode} props.children - The child components that AtpLib will wrap
 * @param {object} [props.theme] - An optional theme object that defines the styles used throughout the library. If not provided, a default theme is used.
 * @param {boolean} [props.dark] - An optional boolean flag that indicates if the dark mode should be the default theme.
 * @param {boolean} [props.usePreferences=false] - An optional boolean flag that allows the change of theme, reading user's preferences and saving them. Defaults to false.
 *
 * @returns {React.Element} The AtpLib Component with child components
 */

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

export function AtpLib({ children, theme: customTheme, dark, usePreferences = false }: PropsWithChildren<Props>) {
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);
  const mergedTheme = useMemo(() => mergeDeep(defaultTheme, customTheme), [customTheme]);

  useLayoutEffect(() => {
    if (dark) {
      setMode?.('dark');
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
    [mode, mergedTheme]
  );

  return <AtpLibContext.Provider value={value}>{children}</AtpLibContext.Provider>;
}
