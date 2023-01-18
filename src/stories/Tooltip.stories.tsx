import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '../Tooltip/Tooltip';

import { Button } from '../Button';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});

const ButtonComp = () => <Button>Press me</Button>;

Basic.args = {
  children: <ButtonComp />,
  content: 'Click to transfer',
  placement: 'bottom',
};
