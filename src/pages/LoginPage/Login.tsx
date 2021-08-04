import React, { useState } from 'react';
import InputTextField from '../../components/InputTextField';
import LoginService from '../../services/LoginService/LoginService';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      LoginService.requestLogin(email, password);
    } else {
      setErrorMessage('Todos os campos são obrigatórios');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTextField
        label="E-mail"
        type="text"
        testID="e-mail"
        changeHandler={handleEmailChange}
      />
      <InputTextField
        label="Senha"
        type="password"
        testID="password"
        changeHandler={handlePasswordChange}
      />
      <button data-testid="submit-button" type="submit">
        Logar
      </button>
      <span data-testid="login-errormessage">{errorMessage}</span>
    </form>
  );
};

export default Login;
