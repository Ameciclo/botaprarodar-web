import React from 'react';
import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
import SelectBikePage from './LendBikeCards/SelectBikePage';

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
          <SelectBikePage
            data-testId="SelectBikeCard"
            communityId={state.communityId || ''}
          />
        </>
      )}
    </>
  );
};

export default LendBikePage;
