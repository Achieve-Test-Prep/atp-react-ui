import React from 'react';

import { render } from '@testing-library/react';

import { Table } from '../components';

describe('Table', () => {
  it('should render without crashing', () => {
    render(<Table />);
  });

  it('should contain a table', () => {
    const { getByRole } = render(<Table />);
    expect(getByRole('table')).toBeTruthy();
  });
});
