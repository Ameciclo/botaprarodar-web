import { Button, FormHelperText, Paper, TextField } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useFormControls } from 'modules/authentication/hooks/index';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LogoBPR } from '../../../../shared/assets/index';
import { useHandleAuth } from '../../contexts/AuthContext';
import LoginService from '../../services/LoginService';
import useStyles from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const [authenticationError, setAuthenticationError] =
    useState<boolean>(false);

  const { onChange } = useHandleAuth();
  const classes = useStyles();
  const { values, errors, handleInputChange, formIsValid } = useFormControls();

  const history = useHistory();

  useEffect(() => {
    setAuthenticationError(false);
  }, [values]);

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
      history.push('/');
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formIsValid()) {
      await handleAuthentication();
    }
  };

  const handleBack = () => {
    history.go(-1);
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
          <div>
            <TextField
              label="E-mail"
              type="text"
              name="email"
              onError={err => err}
              variant="outlined"
              inputProps={{
                'data-testid': 'e-mail',
              }}
              className={classes.fieldsLogin}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              error={!!errors.email}
            />
            {errors.email && (
              <FormHelperText error className={classes.errorMessageFields}>
                <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>
                &nbsp;{errors.email}
              </FormHelperText>
            )}
          </div>
          <div>
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
            />
            {errors.password && (
              <FormHelperText error className={classes.errorMessageFields}>
                <ErrorIcon className={classes.errorIconStyle}> </ErrorIcon>
                &nbsp;{errors.password}
              </FormHelperText>
            )}
          </div>
          {authenticationError && (
            <span className={classes.errorMessageLogin}>
              E-mail ou senha incorretos.
            </span>
          )}
          <Button
            data-testid="submit-button"
            type="submit"
            className={`${classes.buttonStyle} ${classes.disabled}`}
            disabled={!formIsValid()}
          >
            Entrar
          </Button>
          <Button
            data-testid="back-button"
            className={`${classes.backButtonStyle} ${classes.disabled}`}
            disabled={!formIsValid()}
            onClick={() => handleBack()}
          >
            Voltar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
