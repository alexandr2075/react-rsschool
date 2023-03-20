import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("should show the card's list", async () => {
    const card = await screen.findAllByTestId('card');
    screen.debug();
    expect(card).toBeDefined();
  });
  screen.debug();
});
