import { render, screen } from '@testing-library/react';
import InputField from './InputField';

test('renders without error', () => {
  const { container } = render(<InputField />);
  expect(container).toBeInTheDocument;
});

test('should set label', () => {
  render(<InputField label="Email" />);
  const inputField = screen.getByText('Email');
  expect(inputField).toBeInTheDocument;
});
