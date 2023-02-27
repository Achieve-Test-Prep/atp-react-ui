import React, { DependencyList, FC, useMemo } from 'react';

import { render, screen, fireEvent, getByTestId, waitFor } from '@testing-library/react';

import { Text } from '../Typography';
import theme from '../themes/default';

describe('Text', () => {
  it('should render without crashing', () => {
    render(<Text />);
  });

  it('should render with caption styles', () => {
    const expected = theme.text.caption;
    const { container } = render(<Text as="caption">Test</Text>);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with caption-large styles', () => {
    const expected = theme.text['caption-large'];
    const { container } = render(<Text as="caption-large" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with caption-medium styles', () => {
    const expected = theme.text['caption-medium'];
    const { container } = render(<Text as="caption-medium" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with caption-medium-bold styles', () => {
    const expected = theme.text['caption-medium-bold'];
    const { container } = render(<Text as="caption-medium-bold" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h1 styles', () => {
    const expected = theme.text.h1;
    const { container } = render(<Text as="h1" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h2 styles', () => {
    const expected = theme.text.h2;
    const { container } = render(<Text as="h2" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h3 styles', () => {
    const expected = theme.text.h3;
    const { container } = render(<Text as="h3" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h4 styles', () => {
    const expected = theme.text.h4;
    const { container } = render(<Text as="h4" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h5 styles', () => {
    const expected = theme.text.h5;
    const { container } = render(<Text as="h5" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with h6 styles', () => {
    const expected = theme.text.h6;
    const { container } = render(<Text as="h6" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with overline styles', () => {
    const expected = theme.text.overline;
    const { container } = render(<Text as="overline" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with overline-medium styles', () => {
    const expected = theme.text['overline-medium'];
    const { container } = render(<Text as="overline-medium" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with p styles', () => {
    const expected = theme.text.p;
    const { container } = render(<Text as="p" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with p-small styles', () => {
    const expected = theme.text['p-small'];
    const { container } = render(<Text as="p-small" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with subheading styles', () => {
    const expected = theme.text.subheading;
    const { container } = render(<Text as="subheading" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with subtitle styles', () => {
    const expected = theme.text.subtitle;
    const { container } = render(<Text as="subtitle" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with subtitle-small styles', () => {
    const expected = theme.text['subtitle-small'];
    const { container } = render(<Text as="subtitle-small" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with tooltip styles', () => {
    const expected = theme.text.tooltip;
    const { container } = render(<Text as="tooltip" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with tooltip styles', () => {
    const expected = theme.text.tooltip;
    const { container } = render(<Text as="tooltip" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  it('should render with span styles', () => {
    const expected = theme.text.p;
    const { container } = render(<Text as="span" />);
    expect(container.firstChild).toHaveClass(expected);
  });

  // it('does call "compute" again when deps change back to previous state', async () => {
  //   const mockedCallback = jest.fn<{ text: string }, []>();
  //   mockedCallback.mockReturnValue({ text: 'ok' });

  //   const expected = theme.text.p;
  //   const expectedSmall = theme.text['p-small'];
  //   const sut = render(<Text as="p" />);

  //   await waitFor(() => {
  //     expect(sut.container.firstChild).toHaveClass(expected);
  //     expect(mockedCallback.mock.calls).toHaveBeenCalledTimes(1);
  //   });

  //   sut.rerender(<Text as="p-small" />);

  //   await waitFor(() => {
  //     expect(sut.container.firstChild).toHaveClass(expectedSmall);
  //     expect(mockedCallback.mock.calls).toHaveBeenCalledTimes(2); // mock has been called again
  //   });

  //   sut.rerender(<Text as="p" />);

  //   await waitFor(() => {
  //     expect(sut.container.firstChild).toHaveClass(expected);
  //     expect(mockedCallback.mock.calls).toHaveBeenCalledTimes(3); // mock has been called again => useMemo did not keep the previous value
  //   });
  // });
});
