import { auth } from '../firebase';

const LoginService = {
  requestLogin(email: string, password: string) {
    const loginReference = auth.signInWithEmailAndPassword(email, password);
    return loginReference;
  },
};

export default LoginService;
