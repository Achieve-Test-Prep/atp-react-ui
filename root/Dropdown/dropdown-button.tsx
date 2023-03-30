import { Menu } from '@headlessui/react';

import { DropdownButtonProps } from './types';

export default function DropdownButton(props: DropdownButtonProps) {
  return <Menu.Button {...props} />;
}
