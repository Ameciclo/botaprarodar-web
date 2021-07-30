import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Page', () => {
  it('Should render login page', async () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });
});
