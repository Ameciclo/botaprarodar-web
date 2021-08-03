import { render, screen } from '@testing-library/react';
import InputTextField from './InputTextField';

test('renders without error', () => {
  const { container } = render(<InputTextField />);
  expect(container).toBeInTheDocument;
});

test('should set label', () => {
  render(<InputTextField label="Email" />);
  const inputField = screen.getByText('Email');
  expect(inputField).toBeInTheDocument;
});
