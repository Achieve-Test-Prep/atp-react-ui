import type { AlertIconProps } from './types';

export const InfoIcon: React.FC<React.PropsWithChildren<AlertIconProps>> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    aria-label="info"
  >
    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const WarningIcon: React.FC<React.PropsWithChildren<AlertIconProps>> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    aria-label="warning"
  >
    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const DangerIcon: React.FC<React.PropsWithChildren<AlertIconProps>> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    aria-label="danger"
  >
    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const SuccessIcon: React.FC<React.PropsWithChildren<AlertIconProps>> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    aria-label="success"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const NeutralIcon: React.FC<React.PropsWithChildren<AlertIconProps>> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    aria-label="neutral"
  >
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);
