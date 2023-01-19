import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  PageTitle,
  Loading,
  toast,
  CustomCardWithIcon,
} from 'shared/components';
import BikeService from 'modules/bicycles/services/BikeService';
import AmountBikesPerCommunity from 'modules/bicycles/utils/AmountBikesPerCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';
import AmountBikes from '../components/AmountBikes/AmountBikes';
import CommunityMenu from '../components/CommunityMenu/CommunityMenu';
import useStyles from './CommunityManagementPage.styles';

type Params = {
  id: string;
};

const CommunityManagementPage: React.FC = () => {
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);
  const [amountsBikesPerCommunity, setAmountsBikesPerCommunity] =
    useState<AmountBikesPerCommunity>();

  const history = useHistory();
  const { id: communityId } = useParams<Params>();
  const classes = useStyles();

  const showFeedbackError = () => {
    toast.error('Erro ao carregar comunidade.');
  };

  useEffect(() => {
    if (!communityId) return;

    const fetchData = async id => {
      setLoading(true);

      try {
        const communityData = await CommunityService.getCommunityById(id);
        const bikeData = await BikeService.getAmountFilteredBikesPerCommunity(
          id,
        );

        setCommunity(communityData);
        setAmountsBikesPerCommunity(bikeData);
      } catch {
        showFeedbackError();
      } finally {
        setLoading(false);
      }
    };

    fetchData(communityId);
  }, [communityId]);

  const redirectToRegister = () => {
    const params = { communityId };
    history.push('/comunidades/cadastrar-usuario', params);
  };

  const redirectToLendBike = () => {
    const params = { communityId };
    history.push('/comunidades/emprestar-bicicleta', params);
  };

  const redirectToReturnBike = () => {
    const params = { communityId };
    history.push('/comunidades/devolver-bicicleta', params);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid className={classes.headerStyle}>
          <PageTitle id="communityId" text={community?.name || ''} />
        </Grid>
        <Grid>
          <CommunityMenu communityId={communityId} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="cadastrar-usuaria"
            iconName="registerUser"
            text="Cadastrar usuária"
            iconDescription="Cadastrar usuária"
            onClick={redirectToRegister}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="emprestar-bicicleta"
            iconName="lendBike"
            text="Emprestar bicicleta"
            iconDescription="Emprestar bicicleta"
            empty={
              amountsBikesPerCommunity &&
              amountsBikesPerCommunity.available === 0
            }
            onClick={
              amountsBikesPerCommunity &&
              amountsBikesPerCommunity.available === 0
                ? undefined
                : redirectToLendBike
            }
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="devolver-bicicleta"
            iconName="giveBackBike"
            text="Devolver Bicicleta"
            iconDescription="Devolver Bicicleta"
            empty={
              amountsBikesPerCommunity &&
              amountsBikesPerCommunity.borrowed === 0
            }
            onClick={
              amountsBikesPerCommunity &&
              amountsBikesPerCommunity.borrowed === 0
                ? undefined
                : redirectToReturnBike
            }
          />
        </Grid>
      </Grid>

      <AmountBikes amountBikes={amountsBikesPerCommunity} />
    </>
  );
};

export default CommunityManagementPage;
