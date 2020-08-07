import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryFlag from './CountryFlag';

describe('CountryFlag', () => {
  test('renders CountryFlag', () => {
    const { getByText } = renderWithRouter(<CountryFlag />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
