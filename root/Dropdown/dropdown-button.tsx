import { Menu } from '@headlessui/react';

import type { DropdownButtonProps } from './types';

export default function DropdownButton(props: DropdownButtonProps) {
  return <Menu.Button {...props} />;
}
