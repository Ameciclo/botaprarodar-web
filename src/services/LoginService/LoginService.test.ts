import LoginService from './LoginService';
import { auth } from '../firebase';

jest.mock('../firebase');

describe('LoginService', () => {
  it('should call firebase authentication function', () => {
    LoginService.requestLogin('user@example.com', 'password123');
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'user@example.com',
      'password123',
    );
  });

  it('should return user when login with valid inputs', async () => {
    // TODO - Implement this test, mocking '../firebase' with the signInWithEmailAndPassword function
  });
});
