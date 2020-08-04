import React from 'react';
import renderWithRouter from '../../testUtils';
import RegionFilter from './RegionFilter';

describe('RegionFilter', () => {
  test('renders RegionFilter', () => {
    const { getByText } = renderWithRouter(<RegionFilter />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
