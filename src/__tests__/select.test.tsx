import React from 'react';

import { render } from '@testing-library/react';

import { SelectOption, Select } from '../components';
import { defaultTheme as theme } from '../themes/default';

describe('Select', () => {
  it('should render without crashing', () => {
    render(
      <Select
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option value="lorem">Lorem</option>
      </Select>
    );
  });

  it('should render with base styles', () => {
    const expected = theme.select.base;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(getByTestId('select_box')).toHaveClass(expected);
  });

  it('should render with select styles', () => {
    const expected = theme.select.select;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(getByTestId('select_box')).toHaveClass(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.select.active;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(getByTestId('select_box')).toHaveClass(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.select.valid;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        valid
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(getByTestId('select_box')).toHaveClass(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.select.invalid;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        valid={false}
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(getByTestId('select_box')).toHaveClass(expected);
  });

  it('should render with disabled styles', () => {
    const expected = theme.select.disabled;
    const { getByTestId } = render(
      <Select
        disabled
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(getByTestId('select_box')).toHaveClass(expected);
    // expect(wrapper.find('select[disabled]').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render option children', () => {
    const expected = 2;
    const { getByTestId } = render(
      <Select
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option>1</option>
        <option>2</option>
      </Select>
    );

    expect(getByTestId('select_box').children.length).toBe(expected);
  });

  it('should contain name attribute', () => {
    const { getByTestId } = render(
      <Select
        name="test-name"
        data-testid="select_box"
        options={[]}
        onChangeSelection={function (_o: SelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option value="lorem">Lorem</option>
      </Select>
    );
    expect(getByTestId('select_box').getAttribute('name')).toBe('test-name');
  });
});
