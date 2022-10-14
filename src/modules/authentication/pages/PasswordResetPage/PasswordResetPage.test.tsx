import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginService from '../../services/LoginService';
import { renderWithRouterAndAuth } from '../../../../setupTests';
import PasswordResetPage from './PasswordResetPage';

jest.mock('../../services/LoginService', () => {
  return {
    passwordReset: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});
const mockedLoginService = LoginService as jest.Mocked<typeof LoginService>;

async function fillAndSubmitPasswordResetForm(email: string) {
  const emailField = screen.getByTestId('e-mail');

  fireEvent.change(emailField, {
    target: { value: email },
  });

  userEvent.click(screen.getByTestId('submit-button'));
}

let wrapper: any;

describe('PasswordResetPage', () => {
  beforeEach(() => {
    wrapper = renderWithRouterAndAuth(<PasswordResetPage />, {
      route: '/login',
    });
  });

  it('should render password reset page', async () => {
    expect(wrapper.container).toBeInTheDocument();
  });

  it('should have e-mail field', () => {
    const emailField = screen.getByTestId('e-mail');
    expect(emailField).toBeInTheDocument();
  });

  it('should have submit button', () => {
    const submitButton = screen.getByTestId('submit-button');

    expect(submitButton).toBeInTheDocument();
  });

  it('should submit password reset form', async () => {
    await fillAndSubmitPasswordResetForm('newEmail@example.com');

    expect(LoginService.passwordReset).toHaveBeenCalledWith(
      'newEmail@example.com',
    );
  });

  it('should throw error when password reset fails', () => {
    mockedLoginService.passwordReset.mockRejectedValue(new Error());

    expect(LoginService.passwordReset('')).rejects.toThrow(Error);
  });

  it('should show error messages when e-mail field is empty', async () => {
    const emailField = screen.getByTestId('e-mail');

    fireEvent.blur(emailField);

    expect(screen.getByText('Digite seu e-mail')).toBeInTheDocument();
  });
});
