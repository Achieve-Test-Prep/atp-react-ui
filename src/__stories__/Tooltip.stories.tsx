import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button, Tooltip } from '../components';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

function ButtonComp() {
  return <Button>Press me</Button>;
}

export const Basic: Story = {
  args: {
    children: <ButtonComp />,
    content: 'Click to transfer',
    placement: 'bottom',
  },
  render: args => (
    <section className="flex h-80 w-full items-center justify-center">
      <div className="relative">
        <Tooltip {...args} />{' '}
      </div>
    </section>
  ),
};
