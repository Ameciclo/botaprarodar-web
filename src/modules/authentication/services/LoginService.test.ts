import { auth } from '../../../shared/services/firebase';
import LoginService from './LoginService';

jest.mock('../../../shared/services/firebase', () => {
  return {
    auth: {
      signInWithEmailAndPassword: jest
        .fn()
        .mockImplementation(() => Promise.resolve()),
      sendPasswordResetEmail: jest
        .fn()
        .mockImplementation(() => Promise.resolve()),
    },
  };
});

const mockedAuth = auth as jest.Mocked<typeof auth>;

describe('Login Service', () => {
  it('should call auth method to execute login request', () => {
    LoginService.requestLogin('email', 'password');
    expect(mockedAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'email',
      'password',
    );
  });

  it('should call password reset method to reset a password', () => {
    LoginService.passwordReset('email');
    expect(mockedAuth.sendPasswordResetEmail).toHaveBeenCalledWith('email');
  });
});
