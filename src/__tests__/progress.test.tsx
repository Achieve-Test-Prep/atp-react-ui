import React from 'react';

import { render, screen, fireEvent, getByTestId } from '@testing-library/react';

import { Skeleton, Spinner, CircleSkeleton } from '../Progress';
import theme from '../themes/default';

describe('Progress', () => {
  it('should render Skeleton without crashing', () => {
    render(<Skeleton />);
  });

  it('should render CircleSkeleton without crashing', () => {
    render(<CircleSkeleton />);
  });

  it('should render Spinner without crashing', () => {
    render(<Spinner />);
  });

  it('should render Spinner with animation by default', () => {
    const expected = 'animate-spin';
    const { container } = render(<Spinner animate />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render Spinner with animate', () => {
    const expected = 'animate-spin';
    const { container } = render(<Spinner animate />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render Spinner without animation ', () => {
    const expected = 'animate-spin';
    const { container } = render(<Spinner animate={false} />);
    expect(container.firstChild).not.toHaveClass(expected);
  });
});
