import FormHeader from 'shared/components/FormHeader/FormHeader';
import RegisterUserForm from './components/RegisterUserForm/RegisterUserForm';

const RegisterUserPage: React.FC = () => {
  return (
    <div>
      <FormHeader link="/" title="Cadastrar usuário" />
      <RegisterUserForm />
    </div>
  );
};

export default RegisterUserPage;
