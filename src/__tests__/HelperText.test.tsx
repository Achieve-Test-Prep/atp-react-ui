import React from 'react';

import { mount } from 'enzyme';

import { HelperText } from '../Typography';

describe('HelperText', () => {
  it('should render without crashing', () => {
    mount(<HelperText>Lorem ipsum</HelperText>);
  });

  it('should render with base styles', () => {
    const expected = 'text-xs';
    const wrapper = mount(<HelperText>Lorem ipsum</HelperText>);

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with valid styles', () => {
    const expected = 'text-green-600 tb:text-green-400';
    const wrapper = mount(<HelperText valid>Lorem ipsum</HelperText>);

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should render with invalid styles', () => {
    const expected = 'text-red-600 tb:text-red-400';
    const wrapper = mount(<HelperText valid={false}>Lorem ipsum</HelperText>);

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected);
  });
});
