import React from 'react';
import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <section className="flex gap-4">
      <div className="p-4">
        <Button {...args} />
      </div>
      <div className="bg-accent p-4">
        <Button {...args} />
      </div>
      <div className="bg-success p-4">
        <Button {...args} />
      </div>
      <div className="bg-secondary p-4">
        <Button {...args} />
      </div>
      <div className="bg-warning p-4">
        <Button {...args} />
      </div>
    </section>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  as: 'contained',
  size: 'base',
  showLoader: false,
  'aria-label': 'test btn',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Icon',
  as: 'contained',
  size: 'base',
  icon: AcademicCapIcon,
  'aria-label': 'test btn with icon',
};
