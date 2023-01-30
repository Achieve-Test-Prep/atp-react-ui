import { FC, forwardRef, PropsWithChildren } from 'react';

import { XyzTransition } from '@animxyz/react';

import { DivProps } from '../types';

type TXyzTransition = typeof XyzTransition;

export const Animated: FC<PropsWithChildren<TXyzTransition>> = (props) => {
  return <XyzTransition {...props} />;
};

type TRef = HTMLDivElement | null;
interface IAnimatedDiv extends DivProps {
  animated: TXyzTransition;
  isOpen?: boolean;
}

export const AnimatedDiv = forwardRef<TRef, IAnimatedDiv>(function AnimatedDiv(props, ref) {
  const { animated, children, isOpen = true, ...rest } = props;
  return (
    <XyzTransition ref={ref} {...animated}>
      {isOpen && <div {...rest}>{children}</div>}
    </XyzTransition>
  );
});
