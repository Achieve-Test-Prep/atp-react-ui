import { twSort } from '../utils';

export const h5 = twSort`font-serif text-base leading-tight font-normal`;
export const captionMedium = twSort`font-sans text-sm leading-tight font-normal tracking-[0.16px]`;

export const textStyles = {
  h1: twSort`font-sans text-2xl leading-tight font-semibold`,
  h2: twSort`font-sans text-xl leading-tight font-semibold`,
  h3: twSort`font-serif text-xl leading-tight font-normal tracking-wide`,
  h4: twSort`font-serif text-lg leading-tight font-normal`,
  h5,
  h6: twSort`font-serif text-sm leading-tight font-semibold`,
  subheading: twSort`font-sans text-sm leading-tight font-normal italic`,
  subtitle: twSort`font-sans text-xl leading-tight font-medium`,
  'subtitle-small': twSort`font-sans text-xs leading-tight font-semibold`,
  p: twSort`text-accent font-sans text-xs leading-normal font-normal`,
  'p-small': twSort`font-sans text-[0.625rem] leading-normal font-normal`,
  caption: twSort`font-sans text-xs leading-tight font-normal tracking-[0.16px]`,
  'caption-medium': captionMedium,
  'caption-medium-bold': twSort`font-sans text-sm leading-tight font-medium tracking-[0.16px]`,
  'caption-large': twSort`font-sans text-lg leading-tight font-normal tracking-[0.16px]`,
  overline: twSort`font-sans text-xs leading-tight font-normal tracking-[0.16px] underline`,
  'overline-medium': twSort`font-sans text-xs leading-tight font-medium`,
  tooltip: twSort`font-sans text-[0.625rem] leading-tight font-normal tracking-[0.16px]`,
};
