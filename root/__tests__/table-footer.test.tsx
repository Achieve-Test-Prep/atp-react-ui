import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableFooter } from '../Table';
import theme from '../themes/default';

describe('TableFooter', () => {
  it('should render without crashing', () => {
    render(<TableFooter />);
  });

  it('should render with base styles', () => {
    const expected = theme.tableFooter.base;
    const { getByTestId } = render(<TableFooter data-testid="table_footer" />);
    expect(getByTestId('table_footer')).toHaveClass(expected);
  });
});
