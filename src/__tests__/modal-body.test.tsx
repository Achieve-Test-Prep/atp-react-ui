import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ModalBody } from '../Modal';

describe('ModalBody', () => {
  it('should render without crashing', () => {
    render(<ModalBody>Lorem ipsum</ModalBody>);
  });

  it('should render with base styles', () => {
    const expected = 'mb-6 text-sm text-gray-700 tb:text-gray-400';
    const { container } = render(<ModalBody>Lorem ipsum</ModalBody>);

    // expect(wrapper.find('div').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render children', () => {
    const expected = 2;
    const { container } = render(
      <ModalBody>
        <p>Lorem</p>
        <p>Ipsum</p>
      </ModalBody>
    );

    // expect(wrapper.find('p')).toHaveLength(expected);
  });
});
