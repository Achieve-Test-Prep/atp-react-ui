import React, { PropsWithChildren, useMemo } from 'react';

import { defaultTheme, AtpLibContext, ThemeContextType, AtpThemeType } from './themes';
import { DeepPartial } from './themes/types';
import type { DivProps, ThemeMode } from './types';
import { mergeDeep, useThemeMode } from './utils';

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

type Props = DivProps & {
  children: React.ReactNode;
  /**
   * Defines the styles used throughout the library
   */
  theme?: DeepPartial<AtpThemeType>;
  /**
   * Defines dark mode as the default theme
   */
  preferredMode?: ThemeMode;
  /**
   * Allows the change of theme, reading user's preferences and saving them
   */
  usePreferences?: boolean;
};

export function AtpLib({ children, theme: customTheme, preferredMode, usePreferences }: PropsWithChildren<Props>) {
  const [mode, setMode, toggleMode] = useThemeMode({ preferredMode, usePreferences });
  const mergedTheme: AtpThemeType = useMemo(() => mergeDeep(defaultTheme, customTheme), [customTheme]);

  const value: ThemeContextType = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      setMode,
      toggleMode,
    }),
    [mode, toggleMode, setMode, mergedTheme]
  );

  return <AtpLibContext.Provider value={value}>{children}</AtpLibContext.Provider>;
}
