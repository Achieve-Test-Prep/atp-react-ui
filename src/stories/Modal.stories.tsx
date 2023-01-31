import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../Modal';
import { Button } from '../Button';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, onClose, ...rest } = args;
  const [isOpens, setOpen] = useState(args.isOpen);

  return (
    <>
      <Modal
        {...args}
        onClose={() => {
          setOpen(false);
        }}
        isOpen={isOpens}
      />
      <Button
        className="z-[9999999px] fixed"
        onClick={() => {
          setOpen((s) => !s);
        }}
      >
        Open
      </Button>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic label',
  onClose: () => {},
};
