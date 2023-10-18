import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the search input field', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('search for artist');
  expect(searchInput).toBeInTheDocument();
});
