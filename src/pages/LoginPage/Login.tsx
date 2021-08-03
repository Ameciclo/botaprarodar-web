import React from 'react';
import InputTextField from '../../components/InputTextField';

const Login: React.FC = () => {
  return (
    <form>
      <InputTextField label="E-mail" type="text" />
      <InputTextField label="Senha" type="password" />
      <button data-testid="submit-button" type="submit">
        Logar
      </button>
    </form>
  );
};

export default Login;
