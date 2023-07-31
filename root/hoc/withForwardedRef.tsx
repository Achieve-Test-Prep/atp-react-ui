import React from 'react';
// Define the generic type for components which will use the HOC
type ComponentType<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> &
  React.RefAttributes<React.ElementRef<T>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentWithoutRef = React.ElementType & React.ForwardRefExoticComponent<any>;

// Higher Order Component for shared ref-forwarding logic
export function withForwardedRef<T extends ComponentWithoutRef>(Component: T) {
  const ForwardedRefComponent = React.forwardRef<React.ElementRef<T>, ComponentType<T>>(
    ({ className, children, ...rest }, ref) => (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Component ref={ref} className={className} {...rest}>
        {children}
      </Component>
    )
  );

  ForwardedRefComponent.displayName = Component.displayName;

  return ForwardedRefComponent;
}
