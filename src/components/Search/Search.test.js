import React from 'react';
import renderWithRouter from '../../testUtils';
import Search from './Search';

describe('Search', () => {
  test('renders Search', () => {
    const { getByText } = renderWithRouter(<Search />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
