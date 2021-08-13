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
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [authenticationError, setAuthenticationError] =
    useState<boolean>(false);
  const { onChange } = useHandleAuth();
  const classes = useStyles();
  const emailValidation = /\S+@\S+\.\S+/;

  useEffect(() => {
    setAuthenticationError(false);
    validateFields();
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
      setAuthenticationError(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      await handleAuthentication();
    }
  };

  const validateFields = () => {
    setValidEmail(emailValidation.test(email) && email !== ' ');

    setValidPassword(password !== '');
    return validEmail && validPassword;
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
            error={!validEmail}
            helperText={
              !validEmail ? (
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
            error={!validPassword}
            helperText={
              !validPassword ? (
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
