import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBarHook from './SearchBarHook';

describe('input', async () => {
  it('shows button search', () => {
    render(
      <SearchBarHook
        setCards={() => ({ card: 'card' })}
        setErrorData={() => ({ error: 'error' })}
      />
    );
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toBeInTheDocument();
  });
});
