import React from 'react';

import { mount } from 'enzyme';

import { ModalHeader } from '../Modal';

describe('ModalHeader', () => {
  it('should render without crashing', () => {
    mount(<ModalHeader>Lorem ipsum</ModalHeader>);
  });

  it('should render with base styles', () => {
    const expected = 'mt-4 mb-2 text-lg font-semibold text-gray-700 tb:text-gray-300';
    const wrapper = mount(<ModalHeader>Lorem ipsum</ModalHeader>);

    expect(wrapper.find('p').getDOMNode().getAttribute('class')).toContain(expected);
  });
});
