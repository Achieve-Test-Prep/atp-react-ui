import React from 'react';

import { render } from '@testing-library/react';

import { Dropdown } from '../components';

describe('Dropdown', () => {
  it('should render without crashing', () => {
    render(<Dropdown />);
  });

  // it('should render with base styles', () => {
  //   const onClose = jest.fn();
  //   const expected = theme.dropdown.base;
  //   const { getByRole } = render(
  //     <Dropdown>
  //       <DropdownItems />
  //     </Dropdown>
  //   );
  //   const ul = getByRole('menu');
  //   expect(ul).toHaveClass(expected);
  // });

  // it('should render aligned to the default position', () => {
  //   const onClose = jest.fn();
  //   const expected = 'right-0';
  //   const { getByRole } = render(
  //     <Dropdown>
  //       <DropdownItems />
  //     </Dropdown>
  //   );
  //   const ul = getByRole('menu');
  //   expect(ul).toHaveClass(expected);
  // });

  // it('should render aligned to the left', () => {
  //   const onClose = jest.fn();
  //   const expected = 'left-0';
  //   const { getByRole } = render(
  //     <Dropdown>
  //       <DropdownItems align="left" />
  //     </Dropdown>
  //   );
  //   const ul = getByRole('menu');
  //   expect(ul).toHaveClass(expected);
  // });

  // it('should render aligned to the right', () => {
  //   const onClose = jest.fn();
  //   const expected = 'right-0';
  //   const { getByLabelText } = render(<Dropdown />);
  //   const ul = getByLabelText('submenu');
  //   expect(ul).toHaveClass(expected);
  // });

  // it('should call onClose when Esc is pressed', () => {
  //   const onClose = jest.fn();
  //   const { getByLabelText } = render(<Dropdown />);
  //   const ul = getByLabelText('submenu');
  //   fireEvent.keyDown(ul, { key: 'Esc' });
  //   expect(onClose).toHaveBeenCalled();
  // });

  // it('should close dropdown when clicking outside it', () => {
  //   const onClose = jest.fn();
  //   const { getByLabelText } = render(<Dropdown />);
  //   const ul = getByLabelText('submenu');
  //   fireEvent.click(document.body);
  //   expect(onClose).toHaveBeenCalled();
  // });

  // it('should not close dropdown when clicking inside it', () => {
  //   const onClose = jest.fn();
  //   const { getByLabelText } = render(<Dropdown />);
  //   const ul = getByLabelText('submenu');
  //   fireEvent.click(ul);
  //   expect(onClose).not.toHaveBeenCalled();
  // });

  // it('should not call onClose when other key than Esc is pressed', () => {
  //   const onClose = jest.fn();
  //   const { getByLabelText } = render(<Dropdown />);
  //   const ul = getByLabelText('submenu');
  //   fireEvent.keyDown(ul, { key: 'Enter' });
  //   expect(onClose).not.toHaveBeenCalled();
  // });

  // it('should remove the event listener on unmount', () => {
  //   const onClose = jest.fn();
  //   const { unmount } = render(<Dropdown />);
  //   console.log('Global events to test');
  //   // expect(addEventListener).toHaveBeenCalled();
  //   unmount();
  //   // expect(removeEventListener).toHaveBeenCalled();

  //   //   const map = {} as ListenerMap;
  //   //   const removeListener = jest.fn((e, cb) => {
  //   //     map[e] = cb;
  //   //   });
  //   //   document.removeEventListener = removeListener;
  //   //   const onClose = jest.fn();
  //   //   const { container } = render(<Dropdown  />);

  //   //   wrapper.unmount();

  //   //   expect(removeListener).toHaveBeenCalled();
  // });
});
