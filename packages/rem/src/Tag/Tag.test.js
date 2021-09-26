import React from 'react';

    import '@testing-library/jest-dom'
    import { render, fireEvent } from '@testing-library/react';
    
    import Tag from './Tag';
    
    describe('<Tag />', () => {
      it('renders component without break', () => {
        const { getByTestId } = render(<Tag data-testid="Tag" />);
    
        expect(getByTestId('Tag')).toMatchInlineSnapshot(`
          <div
            class="wrap"
            data-testid="Tag"
          />
        `);
      });
    
      it('triggers sent onClick function', () => {
        const onClick = jest.fn();
    
        const { getByTestId } = render(
          <Tag data-testid="button" onClick={onClick} />,
        );
    
        fireEvent.click(getByTestId('Tag'));
    
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });