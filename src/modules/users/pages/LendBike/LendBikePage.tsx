import React from 'react';
import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';

type StateParams = {
  communityId?: string;
};

const LendBikePage: React.FC = () => {
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
        </>
      )}
    </>
  );
};

export default LendBikePage;
