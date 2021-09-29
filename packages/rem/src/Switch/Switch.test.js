import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Switch from './Switch';

describe('<Switch />', () => {
  it('renders component without break', () => {
    const { getByTestId } = render(<Switch data-testid="Switch" />);

    expect(getByTestId('Switch')).toMatchInlineSnapshot(`
          <div
            class="wrap"
            data-testid="Switch"
          />
        `);
  });

  it('triggers sent onClick function', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Switch data-testid="switch" onClick={onClick} />);

    fireEvent.click(getByTestId('Switch'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
