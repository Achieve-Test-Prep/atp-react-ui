import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';
import { useBoolean } from '../hooks/use-boolean';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { open, onClose, ...rest } = args;
  console.log(onClose);
  const [isOpens, opens] = useBoolean(open);

  return (
    <>
      <Modal {...rest} onClose={opens.setFalse} open={isOpens}>
        <ModalHeader>This is the title</ModalHeader>
        <ModalBody>
          This is the modal.
          <br />
          It has fix for initial focus <br />
          It has fix added for scrolling
        </ModalBody>
        <ModalFooter>
          <Button as="link">Got it, thanks!</Button>
          <Button>Got it, thanks!</Button>
        </ModalFooter>
      </Modal>
      <Button size="xs" className="z-[9999999px] fixed" onClick={opens.toggle}>
        Click to open
      </Button>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic label',
  onClose: () => {},
};
