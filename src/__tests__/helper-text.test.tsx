import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { HelperText } from '../Typography';

describe('HelperText', () => {
  it('should render without crashing', () => {
    render(<HelperText>Lorem ipsum</HelperText>);
  });

  it('should render with base styles', () => {
    const expected = 'text-xs';
    const { container } = render(<HelperText>Lorem ipsum</HelperText>);

    // // expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with valid styles', () => {
    const expected = 'text-green-600 tb:text-green-400';
    const { container } = render(<HelperText valid>Lorem ipsum</HelperText>);

    // // expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with invalid styles', () => {
    const expected = 'text-red-600 tb:text-red-400';
    const { container } = render(<HelperText valid={false}>Lorem ipsum</HelperText>);

    // // expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });
});
