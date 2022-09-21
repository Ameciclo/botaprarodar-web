import React from 'react';
import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
import SelectBikePage from '../../components/SelectBikePage/SelectBikePage';
import SelectBikeUserPage from './LendBikeCards/SelectBikeUserPage/SelectBikeUserPage';
import useStyles from './LendBikePage.styles';

type StateParams = {
  communityId?: string;
};

const LendBikePage: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const state = location.state as StateParams;
  const hasParams = !!state?.communityId;

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
          <div className={classes.cardsColumnsStyle}>
            <SelectBikeUserPage />
            <SelectBikePage
             data-testId="SelectBikeCard"
             communityId={state.communityId || ''}
             actionType="withdraw"
            />
          </div>
        </>
      )}
    </>
  );
};

export default LendBikePage;
