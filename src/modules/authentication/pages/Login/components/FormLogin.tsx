import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Input, ErrorText } from 'shared/components';
import useStyles from './FormLogin.styles';

interface Props {
  id: any;
  onSubmit: any;
  control: any;
  values: any;
  schema: any;
  isDisabled: any;
  hasServerError: any;
}

const FormLogin: FC<Props> = ({
  id,
  onSubmit,
  control,
  values,
  schema,
  isDisabled,
  hasServerError,
}) => {
  const classes = useStyles();

  return (
    <form
      method="post"
      data-testid={id}
      onSubmit={onSubmit}
      className={classes.form}
    >
      <Input
        fullWidth
        label="E-mail"
        type="text"
        name="email"
        dataTestId="e-mail"
        control={control}
        defaultValue={values.email}
        rules={schema.email}
      />

      <Input
        fullWidth
        label="Senha"
        type="password"
        name="password"
        dataTestId="password"
        control={control}
        defaultValue={values.password}
        rules={schema.password}
      />

      {hasServerError && (
        <ErrorText id="error-server" text="E-mail ou senha incorretos." />
      )}

      <div className={classes.wrapperButton}>
        <Button
          fullWidth
          size="large"
          type="submit"
          color="primary"
          variant="contained"
          data-testid="submit-button"
          disabled={isDisabled}
        >
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
