import React from 'react';
import { Button, FormHelperText, Paper, TextField } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useFormControls } from 'hooks/useFormControls';
import Community from 'models/Community/Community';

interface EditCommunitiProps {
  community?: Community;
}

const EditCommunityForm: React.FC<EditCommunitiProps> = () => {
  const { values, errors, handleInputChange, formIsValid } = useFormControls();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formIsValid()) {
      return values;
    }
    return values;
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <span> Entrar no Bota pra Rodar </span>
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
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={!!errors.email}
          />
          {errors.email && (
            <FormHelperText error>
              <ErrorIcon> </ErrorIcon>
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
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={!!errors.password}
          />
          {errors.password && (
            <FormHelperText error>
              <ErrorIcon> </ErrorIcon>
              &nbsp;{errors.password}
            </FormHelperText>
          )}
        </div>
        <Button
          data-testid="submit-button"
          type="submit"
          disabled={!formIsValid()}
        >
          Entrar
        </Button>
      </form>
    </Paper>
  );
};

export default EditCommunityForm;
