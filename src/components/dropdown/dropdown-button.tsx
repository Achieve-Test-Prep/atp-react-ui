import { MenuButton } from '@headlessui/react';

import type { DropdownButtonProps } from './types';

export function DropdownButton(props: DropdownButtonProps) {
  return <MenuButton {...props} />;
}
