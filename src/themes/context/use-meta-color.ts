import * as React from 'react';

import { useTheme } from './use-theme';

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};

export function useMetaColor() {
  const { theme } = useTheme();

  const metaColor = React.useMemo(() => {
    return theme !== 'dark' ? META_THEME_COLORS.light : META_THEME_COLORS.dark;
  }, [theme]);

  const setMetaColor = React.useCallback((color: string) => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', color);
  }, []);

  return {
    metaColor,
    setMetaColor,
  };
}
