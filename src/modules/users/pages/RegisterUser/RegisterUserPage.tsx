import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormHeader, EmptyState } from 'shared/components';
import { EmptyStateImage } from 'shared/assets/images';
import RegisterUserForm from './components/RegisterUserForm/RegisterUserForm';

type StateParams = {
  communityId?: string;
};

const RegisterUserPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const hasParams = !!state?.communityId;

  return (
    <>
      {!hasParams && (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Opss!"
          subheading="Pagina não encontrada"
        />
      )}

      {hasParams && (
        <>
          <FormHeader
            link={`/comunidades/gerenciador-de-comunidade/${state.communityId}`}
            title="Voltar"
          />

          <RegisterUserForm
            data-testId="form-register"
            communityId={state.communityId || ''}
          />
        </>
      )}
    </>
  );
};

export default RegisterUserPage;
