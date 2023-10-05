export type ThemeStyleType<K extends string | number | symbol = string, V = string> = Record<K, V>;
export type SizeType = 'base' | 'xs' | 'sm' | 'md' | 'lg';

export type ThemeSizeStyle = ThemeStyleType<SizeType, string>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};
