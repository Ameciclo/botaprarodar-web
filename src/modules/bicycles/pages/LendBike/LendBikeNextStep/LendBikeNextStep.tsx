import React from 'react';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
import { User } from 'modules/users/models';
import SelectBikePage from '../../../components/SelectBikePage/SelectBikePage';
import useStyles from '../LendBikePage.styles';

type StateParams = {
  communityId?: string;
  selectedUser?: User;
};

const LendBikeNextStep: React.FC = () => {
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
            link="/comunidades/emprestar-bicicleta"
            title="Voltar"
            state={{ communityId: state.communityId }}
          />
          <Typography className={classes.pageNameStyle}>
            Emprestar bicicleta
          </Typography>
          <div className={classes.cardsColumnsStyle}>
            <SelectBikePage
              data-testid="SelectBikeCard"
              communityId={state.communityId || ''}
              selectedUser={state.selectedUser || undefined}
              actionType="withdraw"
            />
          </div>
        </>
      )}
    </>
  );
};

export default LendBikeNextStep;
