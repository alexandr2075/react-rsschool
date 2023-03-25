import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('input', async () => {
  it('shows button search', () => {
    render(<SearchBar />);
    const linkElement = screen.getByText('search');
    expect(linkElement).toBeInTheDocument();
  });
});
