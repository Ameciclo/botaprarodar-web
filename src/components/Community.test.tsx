import { render } from '@testing-library/react';
import Community from './Community';

test('renders without error', () => {
  const { container } = render(<Community />);
  expect(container).toBeInTheDocument;
});
