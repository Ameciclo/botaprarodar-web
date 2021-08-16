import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginService from '../../services/LoginService/LoginService';
import LoginPage from './LoginPage';

jest.mock('../../services/LoginService/LoginService');
const mockedLoginService = LoginService as jest.Mocked<typeof LoginService>;

async function fillAndSubmitLoginForm(email: string, password: string) {
  const emailField = screen.getByTestId('e-mail');
  const passwordField = screen.getByTestId('password');

  fireEvent.change(emailField, {
    target: { value: email },
  });

  fireEvent.change(passwordField, {
    target: { value: password },
  });

  await userEvent.click(screen.getByTestId('submit-button'));
}

describe('Login Page', () => {
  it('Should render login page', async () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });

  it('should have e-mail and password fields', () => {
    render(<LoginPage />);
    const emailField = screen.getByTestId('e-mail');
    const passwordField = screen.getByTestId('password');
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should have submit button', () => {
    render(<LoginPage />);

    const submitButton = screen.getByTestId('submit-button');

    expect(submitButton).toBeInTheDocument();
  });

  it('Should submit login form', async () => {
    render(<LoginPage />);

    await fillAndSubmitLoginForm('newEmail@example.com', '1234');

    expect(LoginService.requestLogin).toHaveBeenCalledWith(
      'newEmail@example.com',
      '1234',
    );
  });

  it('Should throw error when login fails', () => {
    mockedLoginService.requestLogin.mockRejectedValue(new Error());

    expect(LoginService.requestLogin('', '')).rejects.toThrow(Error);
  });

  it('Should show error messages when e-mail field is empty', async () => {
    render(<LoginPage />);
    const emailField = screen.getByTestId('e-mail');

    fireEvent.blur(emailField);

    expect(screen.getByText('Digite seu e-mail')).toBeInTheDocument();
  });
});
