import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from '../Avatar';
import theme from '../themes/default';

describe('Avatar', () => {
  it('should render without crashing', () => {
    render(<Avatar src="test" />);
  });

  it('should render with base styles', () => {
    const expected = theme.avatar.base;
    const { container } = render(<Avatar src="test" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with large styles', () => {
    const expected = theme.avatar.size.lg;
    const { container } = render(<Avatar src="test" size="lg" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with base styles using prop', () => {
    const expected = theme.avatar.size.base;
    const { container } = render(<Avatar src="test" size="base" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with base styles by default', () => {
    const expected = theme.avatar.size.base;
    const { container } = render(<Avatar src="test" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with small styles', () => {
    const expected = theme.avatar.size.sm;
    const { container } = render(<Avatar src="test" size="sm" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should contain an image with alt text', () => {
    const expected = 'Lorem';
    const { getByRole } = render(<Avatar src="test" alt="Lorem" />);
    const img = getByRole('img');
    expect(img.getAttribute('alt')).toContain(expected);
  });

  it('should contain an image with the correct src', () => {
    const expected = 'test';
    const { getByRole } = render(<Avatar src="test" alt="Lorem" />);
    const img = getByRole('img');
    expect(img.getAttribute('src')).toContain(expected);
  });
});
