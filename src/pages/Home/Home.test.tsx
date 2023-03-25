import * as React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('card render correctly', async () => {
    render(<Home />);
    await expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
