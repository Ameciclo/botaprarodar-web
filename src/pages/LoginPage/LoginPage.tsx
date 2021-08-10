import { Button, Paper, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import InputTextField from '../../components/InputTextField';
import { useHandleAuth } from '../../context/AuthContext';
import LoginService from '../../services/LoginService/LoginService';
import useStyles from './LoginPage.styles';
import { LogoBPR } from '../../assets/index';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { onChange } = useHandleAuth();
  const classes = useStyles();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className={classes.root}>
      <Paper className={classes.loginPaper}>
        <img
          src={LogoBPR}
          alt="Logo do projeto Bota pra rodar"
          className={classes.logoSize}
        />
        <form onSubmit={handleSubmit} className={classes.loginForm}>
          <span className={classes.fontStyle}> Entrar no Bota pra Rodar </span>
          <TextField
            label="E-mail"
            type="text"
            inputProps={{ 'data-testid': 'e-mail' }}
            onChange={handleEmailChange}
            className={classes.fieldsLogin}
          />
          <TextField
            label="Senha"
            type="password"
            inputProps={{ 'data-testid': 'password' }}
            className={classes.fieldsLogin}
            onChange={handlePasswordChange}
          />
          <Button
            data-testid="submit-button"
            type="submit"
            className={classes.buttonStyle}
          >
            Entrar
          </Button>
          <span data-testid="login-errormessage">{errorMessage}</span>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
