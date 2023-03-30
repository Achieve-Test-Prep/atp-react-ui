import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableHeader } from '../Table';
import theme from '../themes/default';

describe('TableHeader', () => {
  it('should render without crashing', () => {
    render(
      <table>
        <TableHeader />
      </table>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.tableHeader.base;
    const { getByTestId } = render(
      <table>
        <TableHeader data-testid="thead-test" />
      </table>
    );

    expect(getByTestId('thead-test')).toHaveClass(expected);
  });
});
