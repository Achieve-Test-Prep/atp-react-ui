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

    // expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.textarea.active;
    const { container } = render(<Textarea />);

    // expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 tb:bg-gray-800';
    const { container } = render(<Textarea disabled />);

    // expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.textarea.valid;
    const { container } = render(<Textarea valid />);

    // expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.textarea.invalid;
    const { container } = render(<Textarea valid={false} />);

    // expect(wrapper.find('textarea').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should contain name attribute', () => {
    const { container } = render(<Textarea name="test-name" />);

    // expect(wrapper.find('textarea[name="test-name"]').getDOMNode().getAttribute('name')).toBe('test-name');
  });
});
