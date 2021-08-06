import { auth } from '../firebase';

const LoginService = {
  async requestLogin(email: string, password: string) {
    const loginResponse = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    const userDetails = loginResponse.user;
    console.log(userDetails);

    //  return user;
  },
};

export default LoginService;
