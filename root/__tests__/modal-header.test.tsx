import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Modal, ModalHeader } from '../Modal';
import theme from '../themes/default';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('ModalHeader', () => {
  it('should render without crashing', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <ModalHeader>Lorem ipsum</ModalHeader>
      </Modal>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.modalHeader.base;
    const { getByRole } = render(
      <Modal open={true} onClose={() => {}}>
        <ModalHeader>Lorem ipsum</ModalHeader>
      </Modal>
    );
    expect(getByRole('heading')).toHaveClass(expected);
  });
});
