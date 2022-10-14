import React from 'react';
import {
  Button,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useFormControls } from 'modules/authentication/hooks/index';
import LoginService from 'modules/authentication/services/LoginService';
import useStyles from './PasswordResetPage.styles';

const PasswordResetPage: React.FC = () => {
  const { values, errors, handleInputChange, formIsValid } = useFormControls();
  const classes = useStyles();

  async function handlePasswordReset() {
    try {
      await LoginService.passwordReset(values.email);
    } catch (error) {
      // TODO: show error alert dialog
    }
    // TODO: show success dialog
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.email !== undefined) {
      await handlePasswordReset();
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" gutterBottom>
          Esqueci minha senha
        </Typography>
        <Typography variant="body1" gutterBottom>
          Insira o e-mail associado à sua conta e iremos enviar um link para
          recuperar a sua senha.
        </Typography>
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
        <Button
          data-testid="submit-button"
          type="submit"
          className={`${classes.buttonStyle} ${classes.disabled}`}
          disabled={false}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default PasswordResetPage;
