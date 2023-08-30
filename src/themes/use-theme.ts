import { useContext } from 'react';

import { AtpLibContext } from './theme-context';

export const useTheme = () => {
  const { theme, mode, setMode, toggleMode } = useContext(AtpLibContext);

  return { ...theme, mode, setMode, toggleMode };
};
