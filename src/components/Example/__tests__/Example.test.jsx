import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from '../index';

test('test', () => {
  render(<Example />);

  const heading = screen.getByText('Example');

  expect(heading).toBeInTheDocument();
});
