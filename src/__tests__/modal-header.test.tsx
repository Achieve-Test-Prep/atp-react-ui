import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ModalHeader } from '../Modal';
import theme from '../themes/default';

describe('ModalHeader', () => {
  it('should render without crashing', () => {
    render(<ModalHeader>Lorem ipsum</ModalHeader>);
  });

  it('should render with base styles', () => {
    const expected = theme.modalHeader.base;
    const { container } = render(<ModalHeader>Lorem ipsum</ModalHeader>);
    expect(container.firstChild).toHaveClass(expected);
  });
});
