import { useContext } from 'react';

import { AtpLibContext } from './theme-context';

export const useTheme = () => {
  const { theme, mode, toggleMode } = useContext(AtpLibContext);

  return { ...theme, mode, toggleMode };
};
