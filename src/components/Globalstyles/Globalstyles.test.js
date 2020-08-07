import React from 'react';
import renderWithRouter from '../../testUtils';
import Globalstyles from './Globalstyles';

describe('Globalstyles', () => {
  test('renders Globalstyles', () => {
    const { getByText } = renderWithRouter(<Globalstyles />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
