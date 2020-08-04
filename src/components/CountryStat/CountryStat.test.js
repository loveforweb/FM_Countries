import React from 'react';
import renderWithRouter from '../../testUtils';
import CountryStat from './CountryStat';

describe('CountryStat', () => {
  test('renders CountryStat', () => {
    const { getByText } = renderWithRouter(<CountryStat />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
