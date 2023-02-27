import React from 'react';
import { render } from '@testing-library/react';

import { Backdrop } from '../Backdrop';
import theme from '../themes/default';

describe('Backdrop', () => {
  it('should render without crashing', () => {
    render(<Backdrop />);
  });

  it('should render with base styles', () => {
    const expected = theme.backdrop.base;
    const { container } = render(<Backdrop />);
    expect(container.firstChild).toHaveClass(expected);
  });
});
