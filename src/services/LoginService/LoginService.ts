import { auth } from '../firebase';

const LoginService = {
  requestLogin(email: string, password: string, setErrorMessage?: any) {
    let user;
    try {
      auth.signInWithEmailAndPassword(email, password).then(userCredential => {
        user = userCredential.user;
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    return user;
  },
};

export default LoginService;
