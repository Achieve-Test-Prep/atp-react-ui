import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Alert } from '../Alert';
import { SuccessIcon, DangerIcon, WarningIcon, InfoIcon, NeutralIcon } from '../Alert/alert-icons';
const test = (
  <svg
    className="h-5 w-5 text-success tb:text-green-300 absolute left-0 top-0 ml-4 mt-4"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
describe('Avatar', () => {
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
    const { container, getByLabelText } = render(<Alert type="success" />);
    expect(getByLabelText('success')).toBeTruthy();
  });

  it('should render a error icon', () => {
    const { container, getByLabelText } = render(<Alert type="error" />);
    expect(getByLabelText('danger')).toBeTruthy();
  });

  it('should render an info icon', () => {
    const { container, getByLabelText } = render(<Alert type="info" />);
    expect(getByLabelText('info')).toBeTruthy();
  });

  it('should render a warning icon', () => {
    const { container, getByLabelText } = render(<Alert type="warning" />);
    expect(getByLabelText('warning')).toBeTruthy();
  });

  it('should render a neutral icon', () => {
    const { container, getByLabelText } = render(<Alert type="neutral" />);
    expect(getByLabelText('neutral')).toBeTruthy();
  });
});
