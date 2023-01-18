import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormHeader, EmptyState } from 'shared/components';
import { EmptyStateImage } from 'shared/assets/images';
import RegisterUserForm from './components/RegisterUserForm/RegisterUserForm';
import useStyles from './RegisterUserPage.styles';

type StateParams = {
  communityId?: string;
};

const RegisterUserPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const hasParams = !!state?.communityId;
  const classes = useStyles();

  return (
    <>
      {!hasParams && (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Opss!"
          subheading="Página não encontrada"
        />
      )}

      {hasParams && (
        <>
          <FormHeader
            link={`/comunidades/gerenciador-de-comunidade/${state.communityId}`}
            title="Voltar"
          />
          <div className={classes.root}>
            <RegisterUserForm
              data-testid="form-register"
              communityId={state.communityId || ''}
            />
          </div>
        </>
      )}
    </>
  );
};

export default RegisterUserPage;
