import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from '../components';

/**
 * Alert components display important messages to users.
 */
const meta = {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Alert components provide contextual feedback messages for typical user actions.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['neutral', 'info', 'warning', 'success', 'error'],
      description: 'The visual style of the alert',
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    children: {
      control: 'text',
      description: 'The content to display inside the alert',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default neutral alert style.
 */
export const Neutral: Story = {
  args: {
    children: 'This is a neutral alert.',
    type: 'neutral',
  },
};

/**
 * Use for informational messages.
 */
export const Info: Story = {
  args: {
    children: 'This is an informational alert.',
    type: 'info',
  },
};

/**
 * Use for success messages.
 */
export const Success: Story = {
  args: {
    children: 'This is a success alert.',
    type: 'success',
  },
};

/**
 * Use for warning messages.
 */
export const Warning: Story = {
  args: {
    children: 'This is a warning alert.',
    type: 'warning',
  },
};

/**
 * Use for error messages.
 */
export const Error: Story = {
  args: {
    children: 'This is an error alert.',
    type: 'error',
  },
};
