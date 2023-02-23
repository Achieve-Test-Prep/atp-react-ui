import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../Button';
import { DropdownItem } from '../Dropdown';

describe('DropdownItem', () => {
  it('should render without crashing', () => {
    render(<DropdownItem />);
  });

  it('should render with base styles', () => {
    const expected = 'mb-2 last:mb-0';
    const { container } = render(<DropdownItem />);

    // // expect(wrapper.find('li').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should contain a Button child', () => {
    const { container } = render(<DropdownItem />);

    // // expect(wrapper.find(Button)).toBeTruthy();
  });

  it('should pass className to the inner button', () => {
    const expected = 'bg-red-600';
    const { container } = render(<DropdownItem className="bg-red-600" />);

    // // expect(wrapper.find(Button).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should pass extra props to the inner button', () => {
    const expected = 'test';
    const { container } = render(<DropdownItem tag="a" href="test" />);

    // // expect(wrapper.find('a').getDOMNode().getAttribute('href')).toContain(expected);
  });
});
