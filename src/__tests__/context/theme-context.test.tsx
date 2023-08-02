import React, { useContext } from 'react';

import { render, fireEvent } from '@testing-library/react';

import { ThemeProvider, AtpLibContext } from '../../themes/theme-context';

function TestButton() {
  const { toggleMode } = useContext(AtpLibContext);

  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => toggleMode()}>Click</button>;
}

describe('ThemeProvider', () => {
  it('should show value from provider', () => {
    const expected = 'Lorem';
    const { getByTestId } = render(
      <ThemeProvider value={{ theme: 'Lorem' }}>
        <AtpLibContext.Consumer>
          {(value) => <span data-testid="context-test">{value.theme}</span>}
        </AtpLibContext.Consumer>
      </ThemeProvider>
    );

    expect(getByTestId('context-test').textContent).toContain(expected);
  });

  it('should execute the toggleMode method', () => {
    const toggleMode = jest.fn();
    const theme = { test: 'test' };
    const { getByRole } = render(
      <AtpLibContext.Provider value={{ toggleMode, theme }}>
        <TestButton />
      </AtpLibContext.Provider>
    );

    const button = getByRole('button');

    fireEvent.click(button);
    expect(toggleMode).toHaveBeenCalledTimes(1);
  });
});
