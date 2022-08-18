import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormHelperText,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ErrorIcon from '@material-ui/icons/Error';
import { useFormControls } from 'modules/authentication/hooks/index';
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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      history.push('/selecao-de-comunidades');
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
          className={classes.imageEdit}
        />
        <form onSubmit={handleSubmit} className={classes.loginForm}>
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
          <TextField
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
