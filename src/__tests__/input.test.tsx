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
    const { getByTestId } = render(<Input data-testid="input_test" />);
    expect(getByTestId('input_test')).toHaveClass(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.input.active;
    const { getByTestId } = render(<Input data-testid="input_test" />);
    expect(getByTestId('input_test')).toHaveClass(expected);
  });

  it('should render with disabled styles', () => {
    const expected = theme.input.disabled;
    const { getByTestId } = render(<Input disabled data-testid="input_test" />);
    expect(getByTestId('input_test')).toHaveClass(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.input.valid;
    const { getByTestId } = render(<Input valid data-testid="input_test" />);
    expect(getByTestId('input_test')).toHaveClass(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.input.invalid;
    const { getByTestId } = render(<Input valid={false} data-testid="input_test" />);
    expect(getByTestId('input_test')).toHaveClass(expected);
  });

  it('should contain name attribute', () => {
    const { getByTestId } = render(<Input name="test-name" data-testid="input_test" />);
    expect(getByTestId('input_test').getAttribute('name')).toContain('test-name');
  });
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
