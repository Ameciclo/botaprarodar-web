import LoginService from './LoginService';
import * as firebase from '../firebase';

jest.mock('../firebase', () => {
  return {
    auth: jest.fn(),
  };
});

describe('LoginService', () => {
  it('should call firebase authentication function', () => {
    LoginService.requestLogin('user@example.com', 'password123');
    expect(firebase.auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'user@example.com',
      'password123',
    );
  });

  it('should return user when login with valid inputs', async () => {
    (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
      signInWithEmailAndPassword: () => {
        return new Promise(resolve =>
          resolve({
            email: 'example@gmail.com',
            uid: 1,
            emailVerified: true,
          }),
        );
      },
    });
    const userEmailVerified = await LoginService.requestLogin(
      'email@example.com',
      'pass123',
    );
    expect(firebase.auth.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    //    expect(auth.signInWithEmailAndPassword).resolves.toBe(userEmailVerified);
  });
});
