import { Menu } from '@headlessui/react';

import type { DropdownProps } from './types';

export function Dropdown(props: DropdownProps) {
  const { as = 'div', ...rest } = props;

  return <Menu as={as} {...rest} className="relative inline-block" />;
}
