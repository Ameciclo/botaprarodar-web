import React, { useState } from 'react';
import {
  Button,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useHistory } from 'react-router-dom';
import { useFormControls } from 'modules/authentication/hooks/index';
import LoginService from 'modules/authentication/services/LoginService';
import SimpleDialog from '../../../../shared/components/SimpleDialog/SimpleDialog';
import useStyles from './PasswordResetPage.styles';

const PasswordResetPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const { values, errors, handleInputChange } = useFormControls();
  const classes = useStyles();
  const history = useHistory();

  async function handlePasswordReset() {
    try {
      await LoginService.passwordReset(values.email);
      setOpen(true);
    } catch (error: any) {
      setOpenError(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.email) {
      await handlePasswordReset();
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.loginPaper}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Esqueci minha senha
          </Typography>
          <Typography variant="body1" gutterBottom>
            Insira o e-mail associado à sua conta e iremos enviar um link para
            recuperar a sua senha.
          </Typography>
          <TextField
            label="Email"
            type="text"
            name="email"
            onError={err => err}
            variant="outlined"
            inputProps={{
              'data-testid': 'email',
            }}
            className={classes.emailField}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={!!errors.email}
          />
          {errors.email && (
            <FormHelperText error className={classes.errorMessageField}>
              <ErrorIcon fontSize="small"> </ErrorIcon>
              &nbsp;{errors.email}
            </FormHelperText>
          )}
          <Button
            data-testid="submit-button"
            type="submit"
            className={`${classes.buttonStyle} ${classes.disabled}`}
            disabled={values.email.length <= 2 || errors.email.length > 0}
          >
            Enviar
          </Button>
        </form>
      </Paper>
      <SimpleDialog
        title="Erro ao recuperar senha"
        content="Erro ao recuperar senha, confira o seu e-mail."
        open={openError}
        onClose={handleCloseError}
      />
      <SimpleDialog
        title="Confira seu e-mail"
        content="Enviamos o link de recuperação de senha para o seu e-mail."
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default PasswordResetPage;
