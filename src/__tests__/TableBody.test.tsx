import React from 'react';

import { mount } from 'enzyme';

import { TableBody } from '../Table';

describe('TableBody', () => {
  it('should render without crashing', () => {
    mount(
      <table>
        <TableBody />
      </table>
    );
  });

  it('should render with base styles', () => {
    const expected = 'bg-white divide-y tb:divide-gray-700 tb:bg-gray-800 text-gray-700 tb:text-gray-400';
    const wrapper = mount(
      <table>
        <TableBody />
      </table>
    );

    expect(wrapper.find('tbody').getDOMNode().getAttribute('class')).toContain(expected);
  });
});
