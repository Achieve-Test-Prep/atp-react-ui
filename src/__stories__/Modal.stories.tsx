import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import { useBoolean } from '../components/hooks';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../components/Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: () => {
    const [isOpens, opens] = useBoolean();
    return (
      <>
        <Modal onClose={opens.setFalse} open={isOpens}>
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
            <Button modal>Got it, thanks!</Button>
          </ModalFooter>
        </Modal>
        <Button size="xs" className="fixed z-[9999999px]" onClick={opens.toggle}>
          Click to open
        </Button>
      </>
    );
  },
};
