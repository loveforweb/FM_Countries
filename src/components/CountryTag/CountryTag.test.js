import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryTag from './CountryTag';

describe('CountryTag', () => {
  test('renders CountryTag', () => {
    const { getByText } = renderWithRouter(<CountryTag />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
