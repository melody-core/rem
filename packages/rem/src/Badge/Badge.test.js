import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Badge from './Badge';

describe('<Badge />', () => {
  it('renders component without break', () => {
    const { getByTestId } = render(<Badge data-testid="Badge" />);

    expect(getByTestId('Badge')).toMatchInlineSnapshot(`
          <div
            class="wrap"
            data-testid="Badge"
          />
        `);
  });

  it('triggers sent onClick function', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Badge data-testid="Badge" onClick={onClick} />);

    fireEvent.click(getByTestId('Badge'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
