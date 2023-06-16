import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../Alert';

const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'This is a neutral alert.',
    type: 'neutral',
  },
};

// export const WithoutClose = Template.bind({});
// WithoutClose.args = {
//   type: 'success',
//   children: "This alert doesn't have a close button.",
//   onClose: undefined,
// };
