import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '../components';
import { useBoolean } from '../hooks';

/**
 * Modal components provide a way to present content in a layer above the main UI.
 */
const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modals display content that requires user interaction in a layer above the main interface.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Create a proper React component to use the hook
const ModalExample = () => {
  const [isOpen, { setFalse, toggle }] = useBoolean();

  return (
    <>
      <Modal onClose={setFalse} open={isOpen}>
        <ModalHeader>This is the title</ModalHeader>
        <ModalBody>
          This is the modal.
          <br />
          It has fix for initial focus <br />
          It has fix added for scrolling
        </ModalBody>
        <ModalFooter>
          <Button modal as="link">
            Got it, thanks!
          </Button>
          <Button modal onClick={setFalse}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Button size="xs" className="fixed z-[9999999px]" onClick={toggle}>
        Click to open
      </Button>
    </>
  );
};

/**
 * Basic modal example with header, body and footer.
 */
export const Basic: Story = {
  render: () => <ModalExample />,
};
