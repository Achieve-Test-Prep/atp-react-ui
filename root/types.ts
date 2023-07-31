import { ReactNode } from 'react';

// Purpose of DivProps?
export type DivProps = React.HTMLAttributes<HTMLDivElement>;
// FormLabelProps in global types?
export type FormLabelProps = { label?: ReactNode; labelClassName?: string; formItemClassName?: string };
