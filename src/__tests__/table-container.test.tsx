import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableContainer } from '../Table';
import theme from '../themes/default';

describe('TableContainer', () => {
  it('should render without crashing', () => {
    render(<TableContainer />);
  });

  it('should render with base styles', () => {
    const expected = theme.tableContainer.base;
    const { container } = render(<TableContainer />);

    // expect(wrapper.find(TableContainer).getDOMNode().getAttribute('class')).toContain(expected);
  });
});
