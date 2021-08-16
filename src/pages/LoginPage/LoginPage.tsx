import { Button, Paper, TextField } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import React, { useContext, useEffect, useState } from 'react';
import { useHandleAuth } from '../../context/AuthContext';
import LoginService from '../../services/LoginService/LoginService';
import useStyles from './LoginPage.styles';
import { LogoBPR } from '../../assets/index';
import { useFormControls } from '../../components/ValidateForm';

const LoginPage: React.FC = () => {
  const [authenticationError, setAuthenticationError] =
    useState<boolean>(false);

  const { onChange } = useHandleAuth();
  const classes = useStyles();
  const { values, errors, handleInputChange, formIsValid } = useFormControls();

  useEffect(() => {
    setAuthenticationError(false);
  }, []);

  async function handleAuthentication() {
    let user;
    try {
      user = await LoginService.requestLogin(values.email, values.password);
    } catch (error) {
      await setAuthenticationError(true);
    }
    if (user?.authenticated) {
      onChange(user);
      await setAuthenticationError(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formIsValid()) {
      await handleAuthentication();
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
            name="email"
            onError={err => console.log(err)}
            variant="outlined"
            inputProps={{
              'data-testid': 'e-mail',
            }}
            className={classes.fieldsLogin}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={!!errors.email}
            helperText={
              errors.email ? (
                <div className={classes.errorMessageStyle}>
                  <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>{' '}
                  {errors.email}
                </div>
              ) : (
                ' '
              )
            }
          />
          <TextField
            label="Senha"
            type="password"
            name="password"
            variant="outlined"
            inputProps={{ 'data-testid': 'password' }}
            className={classes.fieldsLogin}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={!!errors.password}
            helperText={
              errors.password ? (
                <div className={classes.errorMessageStyle}>
                  <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>
                  <span>{errors.password}</span>
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
            disabled={!formIsValid()}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
