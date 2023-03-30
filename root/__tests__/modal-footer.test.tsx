import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ModalFooter } from '../Modal';
import theme from '../themes/default';

describe('ModalFooter', () => {
  it('should render without crashing', () => {
    render(<ModalFooter>Lorem ipsum</ModalFooter>);
  });

  it('should render with base styles', () => {
    const expected = theme.modalFooter.base;
    const { container } = render(<ModalFooter>Lorem ipsum</ModalFooter>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render children', () => {
    const expected = 2;
    const { container } = render(
      <ModalFooter>
        <p>Lorem</p>
        <p>Ipsum</p>
      </ModalFooter>
    );
    expect(container.firstChild?.childNodes.length).toEqual(expected);
  });
});
