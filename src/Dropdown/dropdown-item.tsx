import React, { useContext } from 'react';

import Button from '../Button/Button';
import type { ButtonProps, Ref } from '../Button/types';
import { ThemeContext } from '../themes/theme-context';

// type Ref = typeof Button
const DropdownItem = React.forwardRef<Ref, ButtonProps>(function DropdownItem(props, ref) {
  // Note: className is passed to the inner Button
  const { children, ...other } = props;

  const {
    theme: { dropdownItem },
  } = useContext(ThemeContext);

  return (
    <li className={dropdownItem.base}>
      <Button as="__dropdownItem" ref={ref} {...other}>
        {children}
      </Button>
    </li>
  );
});

export default DropdownItem;
