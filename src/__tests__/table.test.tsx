import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Table } from '../Table';

describe('Table', () => {
  it('should render without crashing', () => {
    render(<Table />);
  });

  it('should contain a table', () => {
    const { getByRole } = render(<Table />);
    expect(getByRole('table')).toBeTruthy();
  });
});
