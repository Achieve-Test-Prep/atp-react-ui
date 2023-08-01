/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from 'react';

import { defaultTheme } from './default';

type ThemeContextType = {
  theme: any;
  mode?: Mode;
  toggleMode?: any;
};

export const AtpLibContext = React.createContext<ThemeContextType>({ theme: defaultTheme });

type ThemeProviderProps = {
  children: React.ReactNode;
  value?: any;
};

export function ThemeProvider({ children, value }: PropsWithChildren<ThemeProviderProps>) {
  return <AtpLibContext.Provider value={value}>{children}</AtpLibContext.Provider>;
}
