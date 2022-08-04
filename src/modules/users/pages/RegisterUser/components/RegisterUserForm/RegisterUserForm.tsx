import { Button, CircularProgress, Grid } from '@material-ui/core';
import UserService from 'modules/users/services/UserService';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'shared/components';
import { GenderTypes } from 'modules/users/models/types/GenderTypes';
import { RacialTypes } from 'modules/users/models/types/RacialTypes';
import { IncomeTypes } from 'modules/users/models/types/IncomeTypes';
import { SchoolingTypes } from 'modules/users/models/types/SchoolingTypes';
import { SchoolingStatusTypes } from 'modules/users/models/types/SchoolingStatusTypes';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import SocialInfoForm from './components/SocialInfoForm/SocialInfoForm';
import useStyles from './RegisterUserForm.styles';
import ProblemsForm from './components/ProblemsForm/ProblemsForm';
import MotivationForm from './components/MotivationForm/MotivationForm';

const RegisterUserForm: React.FC = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState();

  const handleChangeUser = event => {
    setUser(event.target.value);
    console.log(user);
  };

  SocialInfoForm.defaultProps = {
    user: {
      name: '',
      createDate: '',
      communityId: '',
      telephone: '',
      gender: GenderTypes['Não declarado'],
      age: '',
      income: IncomeTypes['not informed'],
      status: true,
      id: '',
      profilePicture: '',
      address: '',
      isBlocked: false,
      racial: RacialTypes['not informed'],
      schooling: SchoolingTypes['Não informado'],
      schoolingStatus: SchoolingStatusTypes.No,
      userQuiz: {
        alreadyUseBPR: false,
        alreadyUseBPROpenQuestion: '',
        motivationOpenQuestion: '',
        alreadyAccidentVictim: false,
        problemsOnWayOpenQuestion: '',
        timeOnWayOpenQuestion: '',
      },
    },
  };

  const onSubmit = (data: any) => {
    UserService.createUser({})
      .then(() => {
        toast.success('Usuário criado com sucesso.');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <PersonalInfoForm
            control={control}
            user={user}
            onChange={handleChangeUser}
          />
        </Grid>
        <Grid item xs={12}>
          <SocialInfoForm
            control={control}
            user={user}
            onChange={handleChangeUser}
          />
        </Grid>
        <Grid item xs={12}>
          <ProblemsForm control={control} />
        </Grid>
        <Grid item xs={12}>
          <MotivationForm control={control} />
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
