import React from 'react';

import { render } from '@testing-library/react';

import { TableCell } from '../components';
import { defaultTheme as theme } from '../themes/default';

describe('TableCell', () => {
  it('should render without crashing', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.tableCell.base;
    const { getByRole } = render(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    );

    expect(getByRole('cell')).toHaveClass(expected);
  });
});
