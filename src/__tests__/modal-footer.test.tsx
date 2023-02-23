import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ModalFooter } from '../Modal';

describe('ModalFooter', () => {
  it('should render without crashing', () => {
    render(<ModalFooter>Lorem ipsum</ModalFooter>);
  });

  it('should render with base styles', () => {
    const expected =
      'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 tb:bg-gray-800';
    const { container } = render(<ModalFooter>Lorem ipsum</ModalFooter>);

    // expect(wrapper.find('footer').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render children', () => {
    const expected = 2;
    const { container } = render(
      <ModalFooter>
        <p>Lorem</p>
        <p>Ipsum</p>
      </ModalFooter>
    );

    // expect(wrapper.find('p')).toHaveLength(expected);
  });
});
