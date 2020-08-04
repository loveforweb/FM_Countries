import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryCard from './CountryCard';

describe('CountryCard', () => {
  test('renders CountryCard', () => {
    const { getByText } = renderWithRouter(<CountryCard />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
