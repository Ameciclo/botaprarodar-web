import LoginService from './LoginService';
import { auth } from '../firebase';
jest.mock('../firebase');

test('should call firebase authentication function', () => {
  LoginService.requestLogin('user@example.com', 'password123');
  expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
    'user@example.com',
    'password123',
  );
});
