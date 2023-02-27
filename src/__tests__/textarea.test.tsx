import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Textarea } from '../Textarea';
import theme from '../themes/default';

describe('Textarea', () => {
  it('should render without crashing', () => {
    render(<Textarea />);
  });

  it('should render with base styles', () => {
    const expected = theme.textarea.base;
    const { container } = render(<Textarea />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.textarea.active;
    const { container } = render(<Textarea />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with disabled styles', () => {
    const expected = theme.textarea.disabled;
    const { container } = render(<Textarea disabled />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.textarea.valid;
    const { container } = render(<Textarea valid />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.textarea.invalid;
    const { container } = render(<Textarea valid={false} />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should contain name attribute', () => {
    const { getByTestId } = render(<Textarea name="test-name" data-testid="textarea_test" />);
    expect(getByTestId('textarea_test').getAttribute('name')).toBe('test-name');
  });
});
