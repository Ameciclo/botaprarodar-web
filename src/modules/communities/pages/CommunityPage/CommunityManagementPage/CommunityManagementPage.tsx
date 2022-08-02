import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { PageTitle, Loading, CustomLabel } from 'shared/components';
import {
  CadastrarBikeIcon,
  EmprestarBikeIcon,
  DevolverBikeIcon,
  CadastrarUsuarioIcon,
} from 'shared/assets/icons';
import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';
import useStyles from './CommunityManagementPage.styles';

const CommunityManagementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);
  const classes = useStyles();

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
        <Grid item>
          <div className={classes.card}>
            <img
              src={EmprestarBikeIcon}
              alt="Ícone para empréstimo de bicicleta"
              className={classes.communityManagementIcons}
            />
            <p className={classes.upperCardText}>Emprestar bicicleta </p>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.card}>
            <img
              src={DevolverBikeIcon}
              alt="Ícone para devolução de bicicleta"
              className={classes.communityManagementIcons}
            />
            <p className={classes.upperCardText}>Devolver bicicleta</p>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.card}>
            <img
              src={CadastrarBikeIcon}
              alt="Ícone para cadastro de bicicleta"
              className={classes.communityManagementIcons}
            />
            <p className={classes.upperCardText}>Cadastrar bicicleta</p>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.card}>
            <img
              src={CadastrarUsuarioIcon}
              alt="Ícone para cadastro de usuário"
              className={classes.communityManagementIcons}
            />
            <p className={classes.upperCardText}>Cadastrar usuária</p>
          </div>
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
