import React, { useContext } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { ThemeProvider, ThemeContext } from '../../themes/theme-context';

function TestButton() {
  const { toggleMode } = useContext(ThemeContext);

  return <button onClick={() => toggleMode()}>Click</button>;
}

describe('ThemeProvider', () => {
  it('should show value from provider', () => {
    const expected = 'Lorem';
    const { getByTestId } = render(
      <ThemeProvider value={{ theme: 'Lorem' }}>
        <ThemeContext.Consumer>
          {(value) => <span data-testid="context-test">{value.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    expect(getByTestId('context-test').textContent).toContain(expected);
  });

  it('should execute the toggleMode method', () => {
    const toggleMode = jest.fn();
    const theme = { test: 'test' };
    const { getByRole } = render(
      <ThemeContext.Provider value={{ toggleMode, theme }}>
        <TestButton />
      </ThemeContext.Provider>
    );

    const button = getByRole('button');

    fireEvent.click(button);
    expect(toggleMode).toHaveBeenCalledTimes(1);
  });
});
