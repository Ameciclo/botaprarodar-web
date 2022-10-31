import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useFormControls } from 'modules/authentication/hooks/index';
import LoginService from 'modules/authentication/services/LoginService';
import useStyles from './PasswordResetPage.styles';

const PasswordResetPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { values, errors, handleInputChange, formIsValid } = useFormControls();
  const classes = useStyles();
  let errorPasswordReset = false;

  async function handlePasswordReset() {
    try {
      await LoginService.passwordReset(values.email);
    } catch (error: any) {
      errorPasswordReset = true;
    }
    errorPasswordReset = false;
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        data-testid="dialog"
      >
        <DialogTitle id="alert-dialog-title" data-testid="alert-dialog-title">
          {errorPasswordReset
            ? 'Erro ao recuperar senha'
            : 'Confira seu e-mail'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorPasswordReset
              ? 'Erro ao recuperar senha, confira o seu e-mail.'
              : 'Enviamos o link de recuperação de senha para o seu e-mail.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PasswordResetPage;
