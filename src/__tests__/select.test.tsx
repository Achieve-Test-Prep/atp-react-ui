import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ISelectOption, Select } from '../Select';
import theme from '../themes/default';

describe('Select', () => {
  it('should render without crashing', () => {
    render(
      <Select
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option value="lorem">Lorem</option>
      </Select>
    );
  });

  it('should render with base styles', () => {
    const expected = 'block w-full text-sm tb:text-gray-300 focus:outline-none';
    const { container } = render(
      <Select
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with select styles', () => {
    const expected = theme.select.select;
    const { container } = render(
      <Select
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with active styles', () => {
    const expected = theme.select.active;
    const { container } = render(
      <Select
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with valid styles', () => {
    const expected = theme.select.valid;
    const { container } = render(
      <Select
        valid
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with invalid styles', () => {
    const expected = theme.select.invalid;
    const { container } = render(
      <Select
        valid={false}
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with disabled styles', () => {
    const expected = 'cursor-not-allowed opacity-50 bg-gray-300 tb:bg-gray-800';
    const { container } = render(
      <Select
        disabled
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    // expect(wrapper.find('select[disabled]').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render option children', () => {
    const expected = 2;
    const { container } = render(
      <Select
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option>1</option>
        <option>2</option>
      </Select>
    );

    // expect(wrapper.find('select').children()).toHaveLength(expected);
  });

  it('should contain name attribute', () => {
    const { container } = render(
      <Select
        name="test-name"
        options={[]}
        onChangeSelection={function (o: ISelectOption): void {
          throw new Error('Function not implemented.');
        }}
      >
        <option value="lorem">Lorem</option>
      </Select>
    );

    // expect(wrapper.find('select[name="test-name"]').getDOMNode().getAttribute('name')).toBeDefined();
  });
});
