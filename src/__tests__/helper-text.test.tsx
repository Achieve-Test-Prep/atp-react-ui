import React from 'react';

import { render } from '@testing-library/react';

import { HelperText } from '../components';
import { defaultTheme as theme } from '../themes/default';

describe('HelperText', () => {
  it('should render without crashing', () => {
    render(<HelperText>Lorem ipsum</HelperText>);
  });

  it('should render with base styles', () => {
    const expected = theme.helperText.base;
    const { container } = render(<HelperText>Lorem ipsum</HelperText>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.helperText.valid;
    const { container } = render(<HelperText valid>Lorem ipsum</HelperText>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.helperText.invalid;
    const { container } = render(<HelperText valid={false}>Lorem ipsum</HelperText>);
    expect(container.firstChild).toHaveClass(expected);
  });
});
