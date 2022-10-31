import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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
  const emailField = await screen.findByTestId('e-mail');
  fireEvent.change(emailField, {
    target: { value: email },
  });
  userEvent.click(await screen.findByTestId('submit-button'));
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
    await act(async () => {
      await fillAndSubmitPasswordResetForm('newEmail@example.com');
      expect(LoginService.passwordReset).toHaveBeenCalledWith(
        'newEmail@example.com',
      );
    });
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

  it('should show success dialog when form is submitted correctly', async () => {
    await act(async () => {
      await fillAndSubmitPasswordResetForm('newEmail@example.com');
      expect(await screen.findByTestId('dialog')).toBeInTheDocument();
      const dialogTitle = screen.getByTestId('alert-dialog-title');
      expect(dialogTitle).toHaveTextContent('Confira seu e-mail');
    });
  });
});
