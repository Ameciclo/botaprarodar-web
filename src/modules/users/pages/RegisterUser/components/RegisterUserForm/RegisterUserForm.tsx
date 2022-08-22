import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button, CircularProgress, Grid } from '@material-ui/core';
import { UserService } from 'modules/users/services';
import { toast } from 'shared/components';
import useStyles from './RegisterUserForm.styles';
import {
  defaultFormValues,
  FormValues,
  schema,
} from './RegisterUserForm.schema';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import SocialInfoForm from './components/SocialInfoForm/SocialInfoForm';
import ProblemsForm from './components/ProblemsForm/ProblemsForm';
import MotivationForm from './components/MotivationForm/MotivationForm';

export interface Props {
  communityId: string;
}

const RegisterUserForm: React.FC<Props> = ({ communityId }) => {
  const classes = useStyles();
  const { handleSubmit, control, setValue, watch } = useForm<FormValues>({
    defaultValues: defaultFormValues,
  });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const values = watch();

  const handleChange = event => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const showFeedbakSuccess = () => {
    toast.success('Usuário criado com sucesso');
  };

  const showFeedbackError = () => {
    toast.error('Serviço indisponível');
  };

  const goBack = () => {
    history.push(`/comunidades/gerenciador-de-comunidade/${communityId}`);
  };

  const onSubmit = async (data: any) => {
    const body = { ...data, communityId };

    setLoading(true);

    try {
      await UserService.createUser(body);
      showFeedbakSuccess();
      goBack();
    } catch {
      showFeedbackError();
      setLoading(false);
    }
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
            schema={schema}
          />
        </Grid>
      </Grid>

      <Button
        data-testid="cancel-button"
        type="button"
        className={classes.buttonCancel}
        onClick={() => history.push('/')}
      >
        CANCELAR
      </Button>

      <Button
        data-testid="submit-button"
        type="submit"
        className={classes.buttonStyle}
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
