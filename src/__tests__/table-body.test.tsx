import React from 'react';

import { render, screen, fireEvent, getByTestId } from '@testing-library/react';

import { TableBody } from '../Table';
import theme from '../themes/default';

describe('TableBody', () => {
  it('should render without crashing', () => {
    render(
      <table>
        <TableBody />
      </table>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.tableBody.base;
    const { getByTestId } = render(
      <table>
        <TableBody data-testid="table_body" />
      </table>
    );

    expect(getByTestId('table_body')).toHaveClass(expected);
  });
});
