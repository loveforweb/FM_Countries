import React from 'react';
import renderWithRouter from '../../testUtils';
import BorderTags from './BorderTags';

describe('BorderTags', () => {
  test('renders BorderTags', () => {
    const { getByText } = renderWithRouter(<BorderTags />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
