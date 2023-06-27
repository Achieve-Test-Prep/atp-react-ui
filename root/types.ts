import { ReactNode } from 'react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type FormLabelProps = { label?: ReactNode; labelClassName?: string; formItemClassName?: string };
