// export const Basic = Template.bind({});
// Basic.args = {
//   children: 'Button',
//   as: 'contained',
//   size: 'base',
//   showLoader: false,
//   'aria-label': 'test btn',
// };

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   children: 'Icon',
//   as: 'contained',
//   size: 'base',
//   icon: AcademicCapIcon,
//   'aria-label': 'test btn with icon',
// };

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../components';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    as: 'contained',
    size: 'base',
    showLoader: false,
    'aria-label': 'test btn',
  },
};
