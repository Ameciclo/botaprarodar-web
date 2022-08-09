import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'shared/components/Toast/Toast';
import Grid from '@material-ui/core/Grid';
import { PageTitle, Loading, CustomLabel } from 'shared/components';
import CustomCardWithIcon from 'shared/components/CustomCardWithIcon/CustomCardWithIcon';
import BikeService from 'modules/bicycles/services/BikeService';
import AmountBikesPerCommunity from 'modules/bicycles/utils/AmountBikesPerCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';

const CommunityManagementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);
  const [amountsBikesPerCommunity, setAmountsBikesPerCommunity] =
    useState<AmountBikesPerCommunity>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      CommunityService.getCommunityById(id)
        .then(res => {
          setCommunity(res);
        })
        .catch(() => {
          toast.error('Erro ao carregar comunidade.');
        })
        .finally(() => {
          setLoading(false);
        });

      BikeService.getAmountFilteredBikesPerCommunity(id)
        .then(res => {
          setAmountsBikesPerCommunity(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <PageTitle
        id="communityId"
        iconName="gear"
        text={community?.name || ''}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="emprestar-bicicleta"
            iconName="registerUser"
            text="Cadastrar usuária"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={12}>
            <CustomLabel
              text="Total de bicicletas"
              total={amountsBikesPerCommunity?.total}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <CustomLabel
              text="Bicicletas disponíveis"
              total={amountsBikesPerCommunity?.available}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <CustomLabel
            text="Bicicletas emprestadas"
            total={amountsBikesPerCommunity?.borrowed}
            variant="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CommunityManagementPage;
