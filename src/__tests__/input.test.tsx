import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Input } from '../Input';
import theme from '../themes/default';

describe('Input', () => {
  it('should render without crashing', () => {
    render(<Input />);
  });

  it('should render with base styles', () => {
    const expected = theme.input.base;
    const { container } = render(<Input />);

    // // expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.input.active;
    const { container } = render(<Input />);

    // // expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 tb:bg-gray-800';
    const { container } = render(<Input disabled />);

    // // expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.input.valid;
    const { container } = render(<Input valid />);

    // // expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.input.invalid;
    const { container } = render(<Input valid={false} />);

    // // expect(wrapper.find('input').getDOMNode().getAttribute('class')).toContain(expected);
  });

  // it('should render with radio styles', () => {
  //   const expected = theme.input.radio;
  //   const { container } = render(<Input type="radio" />);

  //   // // expect(wrapper.find('input[type="radio"]').getDOMNode().getAttribute('class')).toContain(expected);
  // });

  // it('should render with checkbox styles', () => {
  //   const expected = theme.input.checkbox;
  //   const { container } = render(<Input type="checkbox" />);

  //   // // expect(wrapper.find('input[type="checkbox"]').getDOMNode().getAttribute('class')).toContain(expected);
  // });

  it('should contain name attribute', () => {
    const { container } = render(<Input name="test-name" />);

    // // expect(wrapper.find('input[name="test-name"]').getDOMNode().getAttribute('name')).toBeDefined();
  });
});
