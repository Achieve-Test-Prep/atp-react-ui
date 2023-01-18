// used in ThemeContext
type Mode = string | null;

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.jpg' {
  const content: unknown;
  export default content;
}

declare type ListenerMap = {
  [k: string]: unknown;
};

declare module 'classnames';
