import LoginService from './LoginService';
import { auth } from '../../../shared/services/firebase';

jest.mock('../../../shared/services/firebase');
const mockedAuth = auth as jest.Mocked<typeof auth>;

describe('Login Service', () => {
  it('should call auth method to execute login request', () => {
    mockedAuth.signInWithEmailAndPassword.mockReturnThis();
    LoginService.requestLogin('email', 'password');
    expect(mockedAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'email',
      'password',
    );
  });
});
