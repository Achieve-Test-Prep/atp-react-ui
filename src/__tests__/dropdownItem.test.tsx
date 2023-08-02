import React from 'react';

import { render } from '@testing-library/react';

import { Dropdown, DropdownItem, DropdownItems } from '../components';

describe('DropdownItem', () => {
  it('should render without crashing', () => {
    render(
      <Dropdown>
        <DropdownItems>
          <DropdownItem />
        </DropdownItems>
      </Dropdown>
    );
  });

  // it('should render with base styles', () => {
  //   const expected = theme.dropdownItem.base;
  //   const { getByTestId } = render(
  //     <Dropdown>
  //       <DropdownItems static>
  //         <DropdownItem />
  //       </DropdownItems>
  //     </Dropdown>
  //   );
  //   expect(getByTestId('item')).toHaveClass(expected);
  // });

  // it('should contain a Button child', () => {
  //   const { getByRole } = render(<DropdownItem />);
  //   expect(getByRole('button')).toBeTruthy();
  // });

  // it('should pass className to the inner button', () => {
  //   const expected = 'bg-red-600';
  //   const { getByRole } = render(<DropdownItem buttonProps={{ className: 'bg-red-600' }} />);
  //   expect(getByRole('button')).toHaveClass(expected);
  // });

  // it('should pass extra props to the inner button', () => {
  //   const expected = 'test';
  //   const { getByRole } = render(
  // <Dropdown>
  //   <DropdownItems>
  //     <DropdownItem buttonProps={{ tag: 'a', href: 'test' }}>Test</DropdownItem>
  //   </DropdownItems>
  // </Dropdown>
  //   );

  //   console.log(getByRole('link'));
  //   expect(getByRole('link').getAttribute('href')).toContain(expected);
  // });
});
