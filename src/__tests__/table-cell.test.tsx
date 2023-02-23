import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableCell } from '../Table';

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
    const expected = 'px-4 py-3';
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    );

    // expect(wrapper.find('td').getDOMNode().getAttribute('class')).toContain(expected);
  });
});
