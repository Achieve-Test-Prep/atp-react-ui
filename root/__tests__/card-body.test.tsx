import React from 'react';
import { render } from '@testing-library/react';

import theme from '../themes/default';
import { CardBody } from '../Card';

describe('CardBody', () => {
  it('should render without crashing', () => {
    render(<CardBody />);
  });

  it('should render with default styles', () => {
    const expected = theme.cardBody.base;
    const { container } = render(<CardBody />);
    expect(container.firstChild).toHaveClass(expected);
  });
});
