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
      <PersonalInfoForm control={control} />
      <SocialInfoForm control={control} />
      <MotivationForm control={control} />
      <ProblemsForm control={control} />
    </form>
  );
};

export default RegisterUserForm;
