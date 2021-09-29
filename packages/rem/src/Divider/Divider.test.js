import React from 'react';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Divider from './Divider';

describe('<Divider />', () => {
  it('renders component without break', () => {
    const { getByTestId } = render(<Divider data-testid="Divider" />);

    expect(getByTestId('Divider')).toMatchInlineSnapshot(`
          <div
            class="rem-divider rem-divider-hairline rem-divider-center"
            data-testid="Divider"
          />
        `);
  });

  it('triggers sent onClick function', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Divider data-testid="Divider" onClick={onClick} />);

    fireEvent.click(getByTestId('Divider'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
