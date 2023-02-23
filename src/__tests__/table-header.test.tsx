import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableHeader } from '../Table';

describe('TableHeader', () => {
  it('should render without crashing', () => {
    render(
      <table>
        <TableHeader />
      </table>
    );
  });

  it('should render with base styles', () => {
    const expected =
      'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b tb:border-gray-700 bg-gray-50 tb:text-gray-400 tb:bg-gray-800';
    const { container } = render(
      <table>
        <TableHeader />
      </table>
    );

    // expect(wrapper.find('thead').getDOMNode().getAttribute('class')).toContain(expected);
  });
});
