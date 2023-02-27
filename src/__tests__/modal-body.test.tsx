import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ModalBody } from '../Modal';
import theme from '../themes/default';

describe('ModalBody', () => {
  it('should render without crashing', () => {
    render(<ModalBody>Lorem ipsum</ModalBody>);
  });

  it('should render with base styles', () => {
    const expected = theme.modalBody.base;
    const { container } = render(<ModalBody>Lorem ipsum</ModalBody>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render children', () => {
    const expected = 2;
    const { container } = render(
      <ModalBody>
        <p>Lorem</p>
        <p>Ipsum</p>
      </ModalBody>
    );
    expect(container.firstChild?.childNodes.length).toEqual(expected);
  });
});
