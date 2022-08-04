import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { PageTitle, Loading, CustomLabel } from 'shared/components';
import CustomCardWithIcon from 'shared/components/CustomCardWithIcon/CustomCardWithIcon';

import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';

const CommunityManagementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      CommunityService.getCommunityById(id)
        .then(res => {
          setCommunity(res);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
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
            iconName="lendBike"
            text="Emprestar bicicleta"
          />
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="revolver-bicicleta"
            iconName="giveBackBike"
            text="Devolver bicicleta"
          />
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <CustomCardWithIcon
            id="emprestar-bicicleta"
            iconName="registerBike"
            text="Cadastrar bicicleta"
          />
        </Grid>

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
            <CustomLabel text="Total de bicicletas" total={50} />
          </Grid>
          <Grid item xs={12} md={12}>
            <CustomLabel text="Bicicletas disponíveis" total={25} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <CustomLabel
            text="Bicicletas emprestadas"
            total={50}
            variant="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CommunityManagementPage;
