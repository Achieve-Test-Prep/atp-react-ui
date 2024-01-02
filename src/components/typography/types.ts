import type { Root as LabelRoot } from '@radix-ui/react-label';

export type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?:
    | 'span'
    | 'div'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subheading'
    | 'subtitle'
    | 'subtitle-small'
    | 'p-small'
    | 'caption'
    | 'caption-medium'
    | 'caption-medium-bold'
    | 'caption-large'
    | 'overline'
    | 'overline-medium'
    | 'tooltip'
    | undefined;
};

export type LabelProps = typeof LabelRoot;

export type HelperTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  valid?: boolean;
};
