import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableRow } from '../Table';

describe('TableRow', () => {
  it('should render without crashing', () => {
    render(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    );
  });

  it('should not have base styles', () => {
    const expected = '';
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    );

    expect(getByRole('row').classList.length).toBe(0);
  });
});
