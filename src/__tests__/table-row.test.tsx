import React from 'react';

import { render } from '@testing-library/react';

import { TableRow } from '../components';

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
