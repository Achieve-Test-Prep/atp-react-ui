import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Label } from '../Typography';

describe('Label', () => {
  it('should render without crashing', () => {
    render(<Label>Lorem</Label>);
  });

  it('should render with base styles', () => {
    const expected = 'block text-sm text-gray-700 tb:text-gray-400';
    const { container } = render(<Label>Lorem</Label>);

    // // expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with check styles using check prop', () => {
    const expected = 'inline-flex items-center';
    // const { container } = render(<Label check>Lorem</Label>);

    // // expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with check styles using radio prop', () => {
    const expected = 'inline-flex items-center';
    const { container } = render(<Label radio>Lorem ipsum</Label>);

    // // expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with disabled styles', () => {
    const expected = 'opacity-50 cursor-not-allowed';
    const { container } = render(<Label disabled>Lorem ipsum</Label>);

    // // expect(wrapper.find(Label).getDOMNode().getAttribute('class')).toContain(expected);
  });
});
