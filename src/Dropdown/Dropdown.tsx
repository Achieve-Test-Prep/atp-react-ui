import { Menu } from '@headlessui/react';

import { DropdownProps } from './types';

export default function Dropdown(props: DropdownProps) {
  const { as = 'div', ...rest } = props;

  return <Menu as={as} {...rest} className="relative inline-block" />;
}

// function EditActiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FFDBC4" stroke="#FF6000" strokeWidth="2" />
//     </svg>
//   );
// }
