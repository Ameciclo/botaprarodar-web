import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Loading } from 'shared/components';
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

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Typography variant="h5" gutterBottom className={classes.pageTitle}>
        {community?.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className={classes.card}>
            <img
              src={EmprestarBikeIcon}
              alt="Ícone para empréstimo de bicicleta"
              className={classes.communityManagementIcons}
            />
            Emprestar bicicleta
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.card}>
            <img
              src={DevolverBikeIcon}
              alt="Ícone para devolução de bicicleta"
              className={classes.communityManagementIcons}
            />
            Devolver bicicleta
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.card}>
            <img
              src={CadastrarBikeIcon}
              alt="Ícone para cadastro de bicicleta"
              className={classes.communityManagementIcons}
            />
            Cadastrar bicicleta
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.card}>
            <img
              src={CadastrarUsuarioIcon}
              alt="Ícone para cadastro de usuário"
              className={classes.communityManagementIcons}
            />
            Cadastrar usuária
          </div>
        </Grid>
        <Grid item xs={6} className={classes.border}>
          Total de bicicletas
        </Grid>
        <Grid item xs={6} className={classes.border}>
          Bicicletas disponíveis
        </Grid>
        <Grid item xs={6} className={classes.border}>
          Bicicletas emprestadas
        </Grid>
      </Grid>
    </div>
  );
};

export default CommunityManagementPage;
