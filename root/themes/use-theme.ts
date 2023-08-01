import { useContext } from 'react';

import { ThemeContext } from './theme-context';

export const useTheme = () => {
  const { theme, mode, toggleMode } = useContext(ThemeContext);

  return { ...theme, mode, toggleMode };
};
