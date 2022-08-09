import { Button, CircularProgress, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import SocialInfoForm from './components/SocialInfoForm/SocialInfoForm';
import useStyles from './RegisterUserForm.styles';
import ProblemsForm from './components/ProblemsForm/ProblemsForm';
import MotivationForm from './components/MotivationForm/MotivationForm';
import UserService from '../../../../services/UserService';
import { toast } from '../../../../../../shared/components';

const RegisterUserForm: React.FC = () => {
  const classes = useStyles();
  const { handleSubmit, control, setValue, getValues } = useForm();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const values = getValues();

  const handleChange = event => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const onSubmit = (data: any) => {
    setLoading(true);
    UserService.createUser(data)
      .then(() => {
        toast.success('Usuário criado com sucesso');
      })
      .catch(() => {
        setLoading(false);
        toast.error('Serviço indisponível');
      })
      .finally(() => {
        setLoading(false);
        history.push('/');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <PersonalInfoForm control={control} />
        </Grid>
        <Grid item xs={12}>
          <SocialInfoForm onChange={handleChange} values={values} />
        </Grid>
        <Grid item xs={12}>
          <ProblemsForm
            control={control}
            onChange={handleChange}
            values={values}
          />
        </Grid>
        <Grid item xs={12}>
          <MotivationForm
            control={control}
            onChange={handleChange}
            values={values}
          />
        </Grid>
      </Grid>
      <Button
        data-testid="cancel-button"
        type="button"
        className={`${classes.buttonCancel}`}
        onClick={() => history.push('/')}
      >
        CANCELAR
      </Button>
      <Button
        data-testid="submit-button"
        type="submit"
        className={`${classes.buttonStyle}`}
        disabled={loading}
        startIcon={
          loading ? <CircularProgress style={{ width: 23, height: 23 }} /> : ''
        }
      >
        {loading ? 'CARREGANDO' : 'CONCLUIR CADASTRO'}
      </Button>
    </form>
  );
};

export default RegisterUserForm;
