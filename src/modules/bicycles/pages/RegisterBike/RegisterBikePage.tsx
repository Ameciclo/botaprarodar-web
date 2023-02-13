import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormHeader, EmptyState } from 'shared/components';
import { EmptyStateImage } from 'shared/assets/images';
import useStyles from './RegisterBikePage.styles';
import RegisterBikeForm from './components/RegisterBikeForm/RegisterBikeForm';

type StateParams = {
  communityId?: string;
};

const RegisterBikePage = () => {
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
            <RegisterBikeForm
              data-testid="form-register"
              communityId={state.communityId || ''}
            />
          </div>
        </>
      )}
    </>
  );
};

export default RegisterBikePage;
