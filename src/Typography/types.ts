export interface TextProps extends React.HTMLAttributes<HTMLElement> {
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
}

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Applies specific styles for checkboxes
   */
  checkbox?: boolean;
  /**
   * Applies specific styles for radios
   */
  radio?: boolean;
  /**
   * Defines if the label is disabled (you should still disable child elements)
   */
  disabled?: boolean;
}

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  valid?: boolean;
}
