import AuthInterface from 'modules/authentication/models/AuthInterface';
import { auth } from '../../../shared/services/firebase';

const LoginService = {
  async requestLogin(email: string, password: string): Promise<AuthInterface> {
    const loginResponse = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    const userDetails = loginResponse?.user;
    const getToken = await userDetails?.getIdToken(true);
    const token = getToken || '';

    return {
      token,
      displayName: userDetails?.displayName || '',
      email: userDetails?.email || '',
      authenticated: userDetails?.emailVerified || false,
      uid: userDetails?.uid || '',
      currentCommunity: '',
    };
  },
  async passwordReset(email: string): Promise<void> {
    await auth.sendPasswordResetEmail(email);
  },
};

export default LoginService;
