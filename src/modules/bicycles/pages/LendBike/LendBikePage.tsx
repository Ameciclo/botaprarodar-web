import React from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
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
          <Typography className={classes.pageNameStyle}>
            Emprestar bicicleta
          </Typography>
          <div className={classes.cardsColumnsStyle}>
            <SelectBikeUserPage />
          </div>
        </>
      )}
    </>
  );
};

export default LendBikePage;
