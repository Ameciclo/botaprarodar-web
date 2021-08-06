/* eslint-disable no-console */
import React, { useState } from 'react';
import InputTextField from '../../components/InputTextField';
import { useHandleAuth } from '../../context/AuthContext';
import LoginService from '../../services/LoginService/LoginService';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { onChange } = useHandleAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      LoginService.requestLogin(email, password)
        .then(user => {
          console.log(user);
          onChange(user);
        })
        .catch(err => console.log('err', err));
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

export default LoginPage;
