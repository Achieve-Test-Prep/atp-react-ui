/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from 'react';

import { defaultTheme, DefaultThemeType } from './default';

type ThemeContextType = {
  theme: DefaultThemeType;
  mode?: Mode;
  toggleMode: () => void;
};

export const AtpLibContext = React.createContext<ThemeContextType>({ theme: defaultTheme, toggleMode: () => {} });

type ThemeProviderProps = {
  children: React.ReactNode;
  value?: any;
};

export function ThemeProvider({ children, value }: PropsWithChildren<ThemeProviderProps>) {
  return <AtpLibContext.Provider value={value}>{children}</AtpLibContext.Provider>;
}
