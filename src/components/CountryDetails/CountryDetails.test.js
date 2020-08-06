import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryDetails from './CountryDetails';

describe('CountryDetails', () => {
  test('renders CountryDetails', () => {
    const { getByText } = renderWithRouter(<CountryDetails />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
