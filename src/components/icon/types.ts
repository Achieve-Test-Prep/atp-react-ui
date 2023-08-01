import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, SVGProps } from 'react';

export type SvgIconProps = ForwardRefExoticComponent<
  PropsWithoutRef<SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

export type IconProps = {
  icon: SvgIconProps;
  title?: string | undefined; // Not used?
  titleId?: string | undefined; // Not used?
  className?: string | undefined;
};
