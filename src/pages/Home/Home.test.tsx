import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('card render correctly', async () => {
    render(<Home />);
    await expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('renders a list of cards', async () => {
    render(<Home />);
    const cards = await screen.findAllByTestId('card');
    expect(cards).toHaveLength(10);
    const image = await screen.findAllByAltText('meme');
    expect(image).toHaveLength(10);
  });
});
