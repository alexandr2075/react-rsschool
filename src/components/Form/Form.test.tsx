import { screen } from '@testing-library/react';
import Form from './Form';
import React from 'react';
import { render } from '../../test/test-utils';

describe('check form', () => {
  // beforeEach(() => {
  //   render(<Form />);
  // });

  it.concurrent('renders correctly', () => {
    render(<Form />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
