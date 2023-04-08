import { screen } from '@testing-library/react';
import React from 'react';
import { render } from '../../test/test-utils';
import FormHook from './FormHook';

describe('check form', () => {
  it.concurrent('renders correctly', () => {
    render(<FormHook />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
