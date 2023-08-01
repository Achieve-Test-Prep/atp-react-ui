import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { Alert } from '../components';

describe('Alert', () => {
  it('should render without crashing', () => {
    render(<Alert />);
  });

  it('should not contain a close button', () => {
    render(<Alert />);
    expect(screen.queryByRole('button')).toEqual(null);
  });

  it('should contain a close button', () => {
    render(<Alert onClose={() => {}} />);
    expect(screen.getByLabelText('close')).not.toEqual(null);
  });

  it('should call a function when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Alert onClose={onClose} />);
    const closeBtn = screen.getByLabelText('close');

    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('should render a success icon', () => {
    const { getByLabelText } = render(<Alert type="success" />);
    expect(getByLabelText('success')).toBeTruthy();
  });

  it('should render a error icon', () => {
    const { getByLabelText } = render(<Alert type="error" />);
    expect(getByLabelText('danger')).toBeTruthy();
  });

  it('should render an info icon', () => {
    const { getByLabelText } = render(<Alert type="info" />);
    expect(getByLabelText('info')).toBeTruthy();
  });

  it('should render a warning icon', () => {
    const { getByLabelText } = render(<Alert type="warning" />);
    expect(getByLabelText('warning')).toBeTruthy();
  });

  it('should render a neutral icon', () => {
    const { getByLabelText } = render(<Alert type="neutral" />);
    expect(getByLabelText('neutral')).toBeTruthy();
  });
});
