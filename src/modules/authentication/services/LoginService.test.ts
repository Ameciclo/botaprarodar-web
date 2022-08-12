import { auth } from '../../../shared/services/firebase';
import LoginService from './LoginService';

jest.mock('../../../shared/services/firebase', () => {
  return {
    auth: {
      signInWithEmailAndPassword: jest
        .fn()
        .mockImplementation(() => Promise.resolve()),
    },
  };
});

const mockedAuth = auth as jest.Mocked<typeof auth>;

describe('Login Service', () => {
  it('should call auth method to execute login request', () => {
    //   mockedAuth.signInWithEmailAndPassword.mockReturnThis();
    LoginService.requestLogin('email', 'password');
    expect(mockedAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'email',
      'password',
    );
  });
});
