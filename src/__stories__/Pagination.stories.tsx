import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../components';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {
    totalResults: 120,
    resultsPerPage: 10,
  },
};
