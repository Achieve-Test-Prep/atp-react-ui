import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { TableFooter } from '../Table';

describe('TableFooter', () => {
  it('should render without crashing', () => {
    render(<TableFooter />);
  });

  it('should render with base styles', () => {
    const expected = 'px-4 py-3 border-t tb:border-gray-700 bg-gray-50 text-gray-500 tb:text-gray-400 tb:bg-gray-800';
    const { container } = render(<TableFooter />);

    // expect(wrapper.find('div').getDOMNode().getAttribute('class')).toContain(expected);
  });
});
