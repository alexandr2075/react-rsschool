import * as React from 'react';
import { Card } from './Card';
import { render, screen } from '@testing-library/react';

describe('Card', () => {
  beforeEach(() => {
    render(<Card key={'1'} url={'http'} description={'meme'} />);
  });

  test('should show the card component', () => {
    expect(screen.getByText('meme')).toBeDefined();
  });
});
