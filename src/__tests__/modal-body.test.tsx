import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Modal, ModalBody } from '../Modal';
import theme from '../themes/default';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('ModalBody', () => {
  it('should render without crashing', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <ModalBody>Lorem ipsum</ModalBody>
      </Modal>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.modalBody.base;
    const { getByTestId } = render(
      <Modal open={true} onClose={() => {}}>
        <ModalBody data-testid="modalBody">Lorem ipsum</ModalBody>
      </Modal>
    );
    expect(getByTestId('modalBody')).toHaveClass(expected);
  });

  it('should render children', () => {
    const expected = 2;
    const { getByTestId } = render(
      <Modal open={true} onClose={() => {}}>
        <ModalBody data-testid="modalBody">
          <p>Lorem</p>
          <p>Ipsum</p>
        </ModalBody>
      </Modal>
    );
    expect(getByTestId('modalBody').childNodes.length).toEqual(expected);
  });
});
