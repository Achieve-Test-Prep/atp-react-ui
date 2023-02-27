import React from 'react';

import { render } from '@testing-library/react';

import { DropdownItem } from '../Dropdown';
import theme from '../themes/default';

describe('DropdownItem', () => {
  it('should render without crashing', () => {
    render(<DropdownItem />);
  });

  it('should render with base styles', () => {
    const expected = theme.dropdownItem.base;
    const { container } = render(<DropdownItem />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should contain a Button child', () => {
    const { getByRole } = render(<DropdownItem />);
    expect(getByRole('button')).toBeTruthy();
  });

  it('should pass className to the inner button', () => {
    const expected = 'bg-red-600';
    const { getByRole } = render(<DropdownItem className="bg-red-600" />);
    expect(getByRole('button')).toHaveClass(expected);
  });

  it('should pass extra props to the inner button', () => {
    const expected = 'test';
    const { getByRole } = render(<DropdownItem tag="a" href="test" />);
    expect(getByRole('link').getAttribute('href')).toContain(expected);
  });
});
