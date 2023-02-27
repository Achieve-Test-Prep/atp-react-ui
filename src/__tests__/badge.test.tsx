import React from 'react';
import { render } from '@testing-library/react';

import { Badge } from '../Badge';
import theme from '../themes/default';

describe('Badge', () => {
  it('should render without crashing', () => {
    render(<Badge />);
  });

  it('should render with base styles', () => {
    const expected = theme.badge.base;
    const { container } = render(<Badge />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with success styles', () => {
    const expected = theme.badge.as.base.success;
    const { container } = render(<Badge type="success" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with error styles', () => {
    const expected = theme.badge.as.base.error;
    const { container } = render(<Badge type="error" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with warning styles', () => {
    const expected = theme.badge.as.base.warning;
    const { container } = render(<Badge type="warning" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with neutral styles', () => {
    const expected = theme.badge.as.base.neutral;
    const { container } = render(<Badge type="neutral" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with primary styles', () => {
    const expected = theme.badge.as.base.primary;
    const { container } = render(<Badge type="primary" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with primary styles when no type is used', () => {
    const expected = theme.badge.as.base.primary;
    const { container } = render(<Badge />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with small styles', () => {
    const expected = theme.badge.size.sm;
    const { container } = render(<Badge size="sm" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with base styles without prop', () => {
    const expected = theme.badge.size.base;
    const { container } = render(<Badge />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with base styles', () => {
    const expected = theme.badge.size.base;
    const { container } = render(<Badge size="base" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with lg styles', () => {
    const expected = theme.badge.size.lg;
    const { container } = render(<Badge size="lg" />);
    expect(container.firstChild).toHaveClass(expected);
  });
});
