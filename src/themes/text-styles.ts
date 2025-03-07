import { twSort } from '../utils';

export const h5 = twSort`font-serif text-base font-normal leading-tight`;
export const captionMedium = twSort`font-sans text-sm font-normal leading-tight tracking-[0.16px]`;

export const textStyles = {
  h1: twSort`font-sans text-2xl font-semibold leading-tight`,
  h2: twSort`font-sans text-xl font-semibold leading-tight`,
  h3: twSort`font-serif text-xl font-normal leading-tight tracking-wide`,
  h4: twSort`font-serif text-lg font-normal leading-tight`,
  h5,
  h6: twSort`font-serif text-sm font-semibold leading-tight`,
  subheading: twSort`font-sans text-sm font-normal italic leading-tight`,
  subtitle: twSort`font-sans text-xl font-medium leading-tight`,
  'subtitle-small': twSort`font-sans text-xs font-semibold leading-tight`,
  p: twSort`text-accent font-sans text-xs font-normal leading-normal`,
  'p-small': twSort`font-sans text-[0.625rem] font-normal leading-normal`,
  caption: twSort`font-sans text-xs font-normal leading-tight tracking-[0.16px]`,
  'caption-medium': captionMedium,
  'caption-medium-bold': twSort`font-sans text-sm font-medium leading-tight tracking-[0.16px]`,
  'caption-large': twSort`font-sans text-lg font-normal leading-tight tracking-[0.16px]`,
  overline: twSort`font-sans text-xs font-normal leading-tight tracking-[0.16px] underline`,
  'overline-medium': twSort`font-sans text-xs font-medium leading-tight`,
  tooltip: twSort`font-sans text-[0.625rem] font-normal leading-tight tracking-[0.16px]`,
};
