import { use } from 'react';

import { AtpLibContext } from './theme-context';

export const useTheme = () => {
  const { theme, mode, setMode, toggleMode } = use(AtpLibContext);

  return { ...theme, mode, setMode, toggleMode };
};
