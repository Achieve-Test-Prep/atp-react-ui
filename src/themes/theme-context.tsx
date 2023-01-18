/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

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

export const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
