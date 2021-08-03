import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Page', () => {
  it('Should render login page', async () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it('should have e-mail and password fields', () => {
    render(<Login />);
    const emailField = screen.getByText('E-mail');
    const passwordField = screen.getByText('Senha');
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should have submit button', () => {
    render(<Login />);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument;
  });
});
