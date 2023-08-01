import React from 'react';

import { render } from '@testing-library/react';

import { TableContainer } from '../components';
import { defaultTheme as theme } from '../themes/default';

describe('TableContainer', () => {
  it('should render without crashing', () => {
    render(<TableContainer />);
  });

  it('should render with base styles', () => {
    const expected = theme.tableContainer.base;
    const { getByTestId } = render(<TableContainer data-testid="table_cont" />);

    expect(getByTestId('table_cont')).toHaveClass(expected);
  });
});
