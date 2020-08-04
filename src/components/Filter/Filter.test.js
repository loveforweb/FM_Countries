import React from 'react';
import renderWithRouter from '../../testUtils';
import Filter from './Filter';

describe('Filter', () => {
  test('renders Filter', () => {
    const { getByText } = renderWithRouter(<Filter />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
