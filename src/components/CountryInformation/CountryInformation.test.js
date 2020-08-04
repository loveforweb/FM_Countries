import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryInformation from './CountryInformation';

describe('CountryInformation', () => {
  test('renders CountryInformation', () => {
    const { getByText } = renderWithRouter(<CountryInformation />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
