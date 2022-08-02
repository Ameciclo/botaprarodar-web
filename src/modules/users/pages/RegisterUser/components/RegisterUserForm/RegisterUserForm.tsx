import { Grid } from '@material-ui/core';
import UserService from 'modules/users/services/UserService';
import { useForm } from 'react-hook-form';
import { toast } from 'shared/components';
import MotivationForm from './components/MotivationForm/MotivationForm';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import ProblemsForm from './components/ProblemsForm/ProblemsForm';
import SocialInfoForm from './components/SocialInfoForm/SocialInfoForm';

const RegisterUserForm: React.FC = () => {
  const { handleSubmit, control } = useForm();

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
          <PersonalInfoForm control={control} />
        </Grid>
        <Grid item xs={12}>
          <SocialInfoForm control={control} />
        </Grid>
        <Grid item xs={12}>
          <MotivationForm control={control} />
        </Grid>
        <Grid item xs={12}>
          <ProblemsForm control={control} />
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterUserForm;
