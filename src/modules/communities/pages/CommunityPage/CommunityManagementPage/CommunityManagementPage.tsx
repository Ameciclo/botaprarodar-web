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
  GearIcon,
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
      <div className={classes.titleAndIcon}>
        <Typography
          variant="h5"
          gutterBottom
          className={classes.pageTitle}
          data-testId="communityId"
        >
          {community?.name}
        </Typography>
        <div className={classes.gearBox}>
          <img src={GearIcon} alt="Engrenagem" className={classes.gearIcon} />
        </div>
      </div>
      <Grid container spacing={3}>
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

        <Grid item xs={4} sm={4}>
          <div className={classes.bottomCard}>
            <p>Total de bicicletas</p>
            <p>50</p>
          </div>
        </Grid>
        <Grid item xs={4} sm={4}>
          <div className={classes.bottomCardBlue}>
            <p> Bicicletas disponíveis</p>
            <p>20</p>
          </div>
        </Grid>
        <Grid item xs={4} sm={6}>
          <div className={classes.bottomCard}>
            <p>Bicicletas emprestadas</p>
            <p>30</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommunityManagementPage;
