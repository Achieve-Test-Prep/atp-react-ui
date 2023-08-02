export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * The type of the badge
   */
  type?: 'success' | 'error' | 'warning' | 'neutral' | 'primary' | 'info';
  /**
   * The size of the badge
   */
  size?: 'sm' | 'base' | 'lg';
  /**
   * The color theme of the badge
   */
  as?: 'light' | 'base';
};
