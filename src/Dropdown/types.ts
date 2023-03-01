export interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: (e: KeyboardEvent | MouseEvent) => void;
  /**
   * Defines if the dropdown is open
   */
  isOpen: boolean;
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: 'left' | 'right';
}
