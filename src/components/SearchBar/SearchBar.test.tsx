import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBarHook from './SearchBarHook';

describe('input', async () => {
  it('shows button search', () => {
    render(<SearchBarHook />);
    const linkElement = screen.getByRole('searchbox');
    expect(linkElement).toBeInTheDocument();
  });
});
