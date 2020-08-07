import React from 'react';
import renderWithRouter from '../../testUtils';
import LoaderIcon from './LoaderIcon';

describe('LoaderIcon', () => {
  test('renders LoaderIcon', () => {
    const { getByText } = renderWithRouter(<LoaderIcon />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
