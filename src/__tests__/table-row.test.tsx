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
    const { container } = render(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    );

    // expect(wrapper.find('tr').getDOMNode().getAttribute('class')).toBe(expected);
  });
});
