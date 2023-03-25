import { render, screen } from '@testing-library/react';
import Form from './Form';
import React from 'react';

describe('check form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it.concurrent('renders correctly', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
