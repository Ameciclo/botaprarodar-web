import { auth } from '../firebase';

const LoginService = {
  async requestLogin(email: string, password: string) {
    const loginResponse = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    const userDetails = loginResponse.user;

    return {
      displayName: userDetails?.displayName || '',
      email: userDetails?.email || '',
      authenticated: userDetails?.emailVerified || false,
    };
  },
};

export default LoginService;
