import AuthInterface from 'models/Auth/AuthInterface';
import { auth } from '../firebase';

const LoginService = {
  async requestLogin(email: string, password: string): Promise<AuthInterface> {
    const loginResponse = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    const userDetails = loginResponse?.user;
    console.log(userDetails);
    const getToken = await userDetails?.getIdToken(true);
    const token = getToken || '';

    return {
      token,
      displayName: userDetails?.displayName || '',
      email: userDetails?.email || '',
      authenticated: userDetails?.emailVerified || false,
    };
  },
};

export default LoginService;
