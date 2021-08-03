import { render, screen } from '@testing-library/react';
import InputTextField from './InputTextField';

test('renders without error', () => {
  const { container } = render(<InputTextField label="" type="text" />);
  expect(container).toBeInTheDocument;
});

test('should set label', () => {
  render(<InputTextField label="E-mail" type="text" />);
  const inputField = screen.getByText('E-mail');
  expect(inputField).toBeInTheDocument;
});
