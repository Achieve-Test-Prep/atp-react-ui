import React from 'react';
import { render } from '@testing-library/react';

import { Card } from '../Card';
import theme from '../themes/default';
import { twMerge } from 'tailwind-merge';

describe('Card', () => {
  it('should render without crashing', () => {
    render(<Card />);
  });

  it('should render with base styles', () => {
    const expected = theme.card.base;
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with default styles', () => {
    const expected = theme.card.base;
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should add classes to base styles', () => {
    const expected = twMerge(theme.card.base, `bg-red-400`);
    const { container } = render(<Card className="bg-red-400" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render children', () => {
    const { container } = render(<Card>Lorem ipsum</Card>);
    expect(container.textContent).toContain('Lorem ipsum');
  });
});
