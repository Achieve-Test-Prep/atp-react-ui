import React from 'react';

// Define the generic type for components which will use the HOC
/**
 * ComponentType is a generic type for React components which use the Higher Order Component.
 * It represents a component with properties excluding ref, along with a ref attribute.
 *
 * @template T A subtype of React.ElementType.
 */
type ComponentType<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> &
  React.RefAttributes<React.ElementRef<T>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Represents a React component without ref attribute. It's a union of React.ElementType and
 * React.ForwardRefExoticComponent with any props.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentWithoutRef = React.ElementType & React.ForwardRefExoticComponent<any>;

/**
 * Higher Order Component (HOC) to share ref-forwarding logic across components.
 * The HOC takes a component as an argument and returns a new component with forwarded refs.
 *
 * @template T A subtype of ComponentWithoutRef.
 * @param {T} Component A React component.
 * @returns A new component with forwarded refs.
 */
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
