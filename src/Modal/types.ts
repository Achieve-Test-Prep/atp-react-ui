export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines if the modal is open
   */
  isOpen: boolean;
  /**
   * Function executed when the dropdown is closed
   * Controls the visibility of close button as well
   */
  onClose?: () => void;
  /**
   * disables the internal closing mechanics
   */
  disableInternalClosing?: boolean;
}
