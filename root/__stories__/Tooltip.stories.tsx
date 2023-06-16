import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <section className="w-full h-80 flex justify-center items-center">
    <div className="relative">
      <Tooltip {...args} />{' '}
    </div>
  </section>
);

export const Basic = Template.bind({});

const ButtonComp = () => <Button>Press me</Button>;

Basic.args = {
  children: <ButtonComp />,
  content: 'Click to transfer',
  placement: 'bottom',
};
