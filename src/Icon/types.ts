import { ForwardRefExoticComponent, SVGProps } from 'react';

export type SvgIconProps = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined }
>;

export type IconProps = {
  icon: SvgIconProps;
  title?: string | undefined;
  titleId?: string | undefined;
  className?: string | undefined;
};
