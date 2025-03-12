import React from 'react';

import type { ThemeMode } from '../types';

import type { AtpThemeType } from './default';
import { defaultTheme } from './default';

export type ThemeContextType = {
  theme: AtpThemeType;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

export const AtpLibContext = React.createContext<ThemeContextType>({
  theme: defaultTheme,
  mode: 'system',
  setMode: () => {},
  toggleMode: () => {},
});
