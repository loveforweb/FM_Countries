import React from 'react';
import renderWithRouter from '../../testUtils';
import Themes from './Themes';

describe('Themes', () => {
  test('renders Themes', () => {
    const { getByText } = renderWithRouter(<Themes />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
