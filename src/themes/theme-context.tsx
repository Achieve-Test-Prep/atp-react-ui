/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from 'react';

import defaultTheme from './default';

interface ThemeContextInterface {
  theme: any;
  mode?: Mode;
  toggleMode?: any;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme });

interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}

export function ThemeProvider({ children, value }: PropsWithChildren<ThemeProviderProps>) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
