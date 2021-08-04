import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginService from '../../services/LoginService/LoginService';
import Login from './Login';

jest.mock('../../services/LoginService/LoginService');

async function fillAndSubmitLoginForm(email: string, password: string) {
  const emailField = screen.getByTestId('e-mail');
  const passwordField = screen.getByTestId('password');

  fireEvent.change(emailField, {
    target: { value: email },
  });

  fireEvent.change(passwordField, {
    target: { value: password },
  });

  userEvent.click(screen.getByTestId('submit-button'));
}

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

  it('Should submit login form', async () => {
    render(<Login />);

    await fillAndSubmitLoginForm('newEmail@example.com', '1234');

    expect(LoginService.requestLogin).toHaveBeenCalledWith(
      'newEmail@example.com',
      '1234',
    );
  });

  it('should show error message when one of the fields is empty', async () => {
    render(<Login />);

    await fillAndSubmitLoginForm('', '123');

    const errorMessage = screen.getByTestId('login-errormessage');
    expect(errorMessage.textContent).toBe('Todos os campos são obrigatórios');
  });
});
