export type ThemeStyleType<K extends string | number | symbol = string, V = string> = Record<K, V>;
export type SizeType = 'base' | 'xs' | 'sm' | 'md' | 'lg';

export type ThemeSizeStyle = ThemeStyleType<SizeType, string>;
