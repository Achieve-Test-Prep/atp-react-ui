import React, { useContext } from 'react';

import { mount } from 'enzyme';

import { Button } from '../Button';
import { AtpLibContext } from '../index';
import { AtpLib } from '../atp-lib';

function TestButton() {
  const { toggleMode } = useContext(AtpLibContext);

  return <button onClick={toggleMode}>Click</button>;
}

describe('AtpLib Context', () => {
  beforeEach(() => {
    document.documentElement.className = '';
  });

  it('should use defaultTheme styles', () => {
    const expected =
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none';
    const wrapper = mount(
      <AtpLib>
        <Button />
      </AtpLib>
    );

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should extend theme', () => {
    const expected = 'bg-red-600';
    const theme = {
      button: {
        base: 'bg-red-600',
      },
    };
    const wrapper = mount(
      <AtpLib theme={theme}>
        <Button />
      </AtpLib>
    );

    expect(wrapper.find('button').getDOMNode().getAttribute('class')).toContain(expected);
  });

  it('should add light class to html element if usePreferences is present', () => {
    const expected = 'light';
    mount(
      <AtpLib usePreferences>
        <Button />
      </AtpLib>
    );

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });

  it('should not add any class to html element if usePreferences is ausent', () => {
    const expected = '';
    mount(
      <AtpLib>
        <Button />
      </AtpLib>
    );

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });

  it('should execute the toggleTheme method', () => {
    const expected = 'dark';
    const wrapper = mount(
      <AtpLib usePreferences>
        <TestButton />
      </AtpLib>
    );

    const button = wrapper.find('button');

    button.simulate('click');

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });

  it('should add dark theme based on users preference', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
    });

    const expected = 'dark';
    mount(
      <AtpLib usePreferences>
        <Button />
      </AtpLib>
    );

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });

  it('should add dark theme class to html element', () => {
    const expected = 'dark';
    mount(
      <AtpLib dark>
        <Button />
      </AtpLib>
    );

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });

  it('should add dark theme class to html element when usePreferences is enabled', () => {
    const expected = 'dark';
    mount(
      <AtpLib dark usePreferences>
        <Button />
      </AtpLib>
    );

    expect(document.documentElement.getAttribute('class')).toBe(expected);
  });
});
