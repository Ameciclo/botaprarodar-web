import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { PageTitle, Loading, CustomLabel, toast } from 'shared/components';
import CustomCardWithIcon from 'shared/components/CustomCardWithIcon/CustomCardWithIcon';
import BikeService from 'modules/bicycles/services/BikeService';
import AmountBikesPerCommunity from 'modules/bicycles/utils/AmountBikesPerCommunity';
import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';

type Params = {
  id: string;
};

const CommunityManagementPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);
  const [amountsBikesPerCommunity, setAmountsBikesPerCommunity] =
    useState<AmountBikesPerCommunity>();

  const history = useHistory();

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
        .catch(() => {
          toast.error('Erro ao carregar lista de comunidades.');
        });
    }
  }, [id]);

  const redirectToRegister = () => {
    const params = { communityId: id };
    history.push('/comunidades/cadastrar-usuario', params);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle
        id="communityId"
        iconName="gear"
        text={community?.name || ''}
        iconDescription="Ícone de Configurações"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="emprestar-bicicleta"
            iconName="registerUser"
            text="Cadastrar usuária"
            iconDescription="Emprestar bicicleta"
            onClick={redirectToRegister}
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
    </>
  );
};

export default CommunityManagementPage;
