/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { defaultTheme, AtpThemeType } from './default';

export type ThemeContextType = {
  theme: AtpThemeType;
  mode?: Mode;
  toggleMode: () => void;
};

export const AtpLibContext = React.createContext<ThemeContextType>({ theme: defaultTheme, toggleMode: () => {} });

// type ThemeProviderProps = {
//   children: React.ReactNode;
//   value?: ThemeContextType;
// };

// export function ThemeProvider({ children, value }: PropsWithChildren<ThemeProviderProps>) {
//   return <AtpLibContext.Provider value={value}>{children}</AtpLibContext.Provider>;
// }
