import React from 'react';
import renderWithRouter from '../../testUtils';
import BackButton from './BackButton';

describe('BackButton', () => {
  test('renders BackButton', () => {
    const { getByText } = renderWithRouter(<BackButton />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
