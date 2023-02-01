import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@animxyz/core';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { useBoolean } from '../hooks/use-boolean';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, onClose, ...rest } = args;
  const [isOpens, open] = useBoolean(isOpen);

  return (
    <>
      <Modal {...rest} onClose={open.setFalse} isOpen={isOpens} />
      <Button size="xs" className="z-[9999999px] fixed" onClick={open.toggle}>
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
