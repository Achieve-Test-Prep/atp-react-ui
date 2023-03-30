import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Label } from '../Typography';
import theme from '../themes/default';

describe('Label', () => {
  it('should render without crashing', () => {
    render(<Label>Lorem</Label>);
  });

  it('should render with base styles', () => {
    const expected = theme.label.base;
    const { container } = render(<Label>Lorem</Label>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with check styles using check prop', () => {
    const expected = theme.label.checkbox;
    const { container } = render(<Label checkbox>Lorem</Label>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with check styles using radio prop', () => {
    const expected = theme.label.checkbox;
    const { container } = render(<Label radio>Lorem ipsum</Label>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with disabled styles', () => {
    const expected = theme.label.disabled;
    const { container } = render(<Label disabled>Lorem ipsum</Label>);
    expect(container.firstChild).toHaveClass(expected);
  });
});
