import { auth } from '../firebase';

const LoginService = {
  async requestLogin(email: string, password: string) {
    const loginResponse = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    const userDetails = loginResponse.user;
    // eslint-disable-next-line no-console
    console.log(userDetails);

    return userDetails;
  },
};

export default LoginService;
