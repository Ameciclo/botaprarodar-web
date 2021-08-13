import { Button, Paper, TextField } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import React, { useEffect, useState } from 'react';
import { useHandleAuth } from '../../context/AuthContext';
import LoginService from '../../services/LoginService/LoginService';
import useStyles from './LoginPage.styles';
import { LogoBPR } from '../../assets/index';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emptyFieldsStatus, setEmptyFieldsStatus] = useState<boolean>(false);
  const [authenticationError, setAuthenticationError] =
    useState<boolean>(false);
  const { onChange } = useHandleAuth();
  const classes = useStyles();

  useEffect(() => {
    setAuthenticationError(false);
    setEmptyFieldsStatus(false);
  }, [password, email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function handleAuthentication() {
    let user;
    try {
      user = await LoginService.requestLogin(email, password);
    } catch (error) {
      setAuthenticationError(true);
    }
    if (user?.authenticated) {
      onChange(user);
      setEmptyFieldsStatus(false);
      setAuthenticationError(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValidation = /\S+@\S+\.\S+/;
    if (email && password && emailValidation.test(email)) {
      await handleAuthentication();
    } else {
      setEmptyFieldsStatus(true);
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
            id="email"
            onError={err => console.log(err)}
            variant="outlined"
            inputProps={{
              'data-testid': 'e-mail',
            }}
            className={classes.fieldsLogin}
            onChange={handleEmailChange}
            error={email === '' && emptyFieldsStatus}
            helperText={
              emptyFieldsStatus ? (
                <div className={classes.errorMessageStyle}>
                  <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>{' '}
                  {email === '' ? (
                    <span>&nbsp;Digite seu e-mail</span>
                  ) : (
                    <span>&nbsp;E-mail inválido</span>
                  )}
                </div>
              ) : (
                ' '
              )
            }
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            inputProps={{ 'data-testid': 'password' }}
            className={classes.fieldsLogin}
            onChange={handlePasswordChange}
            error={password === '' && emptyFieldsStatus}
            helperText={
              password === '' && emptyFieldsStatus ? (
                <div className={classes.errorMessageStyle}>
                  <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>
                  <span>&nbsp;Digite sua senha</span>
                </div>
              ) : (
                ' '
              )
            }
          />
          {authenticationError && (
            <span className={classes.errorMessageStyle}>
              E-mail ou senha incorretos.
            </span>
          )}
          <Button
            data-testid="submit-button"
            type="submit"
            className={classes.buttonStyle}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
