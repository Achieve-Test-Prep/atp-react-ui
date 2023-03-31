import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, SVGProps } from 'react';

export type SvgIconProps = ForwardRefExoticComponent<
  PropsWithoutRef<SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

export type IconProps = {
  icon: SvgIconProps;
  title?: string | undefined;
  titleId?: string | undefined;
  className?: string | undefined;
};
