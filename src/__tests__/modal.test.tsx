import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from '../Modal';
import theme from '../themes/default';

describe('Modal', () => {
  it('should render without crashing', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    );
  });

  it('should render with base styles', () => {
    const onClose = jest.fn();
    const expected = theme.modal.base;
    const { getByRole } = render(
      <Modal isOpen={true} onClose={onClose}>
        Lorem ipsum
      </Modal>
    );
    expect(getByRole('dialog')).toHaveClass(expected);
  });

  // it('should call onClose when Esc is pressed', () => {
  //   const onClose = jest.fn();
  //   const { getByRole } = render(
  //     <Modal isOpen={true} onClose={onClose}>
  //       Lorem ipsum
  //     </Modal>
  //   );

  //   const cont = getByRole('dialogue');
  //   fireEvent.keyDown(cont, { key: 'Esc' });
  //   expect(onClose).toHaveBeenCalled();
  // });

  //   it('should not call onClose when other key than Esc is pressed', () => {
  //     const map = {} as ListenerMap;
  //     document.addEventListener = jest.fn((e, cb) => {
  //       map[e] = cb;
  //     });
  //     const onClose = jest.fn();
  //     render(
  //       <Modal isOpen={true} onClose={onClose}>
  //         Lorem ipsum
  //       </Modal>
  //     );

  //     map.keydown({ key: 'Enter' });

  //     expect(onClose).not.toHaveBeenCalled();
  //   });

  //   it('should remove the event listener on unmount', () => {
  //     const map = {} as ListenerMap;
  //     const removeListener = jest.fn((e, cb) => {
  //       map[e] = cb;
  //     });
  //     document.removeEventListener = removeListener;
  //     const onClose = jest.fn();
  //     const { container } = render(
  //       <Modal isOpen={true} onClose={onClose}>
  //         Lorem ipsum
  //       </Modal>
  //     );

  //     wrapper.unmount();

  //     expect(removeListener).toHaveBeenCalled();
  //   });

  //   it('should not close modal when clicking inside it', () => {
  //     const map = {} as ListenerMap;
  //     document.addEventListener = jest.fn((e, cb) => {
  //       map[e] = cb;
  //     });
  //     const onClose = jest.fn();
  //     const { container } = render(
  //       <Modal isOpen={true} onClose={onClose}>
  //         Lorem ipsum
  //       </Modal>
  //     );
  //     const modal = wrapper.find('div[role="dialog"]');

  //     modal.simulate('click');

  //     expect(onClose).not.toHaveBeenCalled();
  //   });
});
