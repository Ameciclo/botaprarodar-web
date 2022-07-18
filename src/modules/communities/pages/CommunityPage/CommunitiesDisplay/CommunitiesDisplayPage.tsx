import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Loading } from 'shared/components';
import EmptyState from 'shared/components/EmptyState/EmptyState';
import { EmptyStateImage } from 'shared/assets/images';
import Community from '../../../models/Community';
import CommunityService from '../../../services/CommunityService';
import useStyles from './CommunitiesDisplayPage.styles';
import CommunityCard from '../components/CommunityCard/CommunityCard';
import CreateCommunityButton from '../components/CreateCommunityButton/CreateCommunityButton';

type CommunitiesDisplayType = {
  isSelectingCommunities: boolean;
};

const CommunitiesDisplayPage: React.FC<CommunitiesDisplayType> = ({
  isSelectingCommunities,
}) => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();

  useEffect(() => {
    CommunityService.getAllCommunities()
      .then(res => {
        setCommunities(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        data-testid="communities-header-grid"
        direction="row"
        justifyContent="space-between"
      >
        <Grid item md={8} xs={12}>
          <Typography variant="h5" gutterBottom className={classes.pageTitle}>
            Comunidades do Bota pra Rodar
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          {!isSelectingCommunities && <CreateCommunityButton />}
        </Grid>
      </Grid>

      {loading ? (
        <Loading />
      ) : communities.length ? (
        <Grid container spacing={4} data-testid="communities-grid">
          {communities?.map(community => (
            <Grid
              key={community.id}
              item
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className={classes.card}
            >
              <CommunityCard
                key={community.id}
                community={community}
                showEditOption={!isSelectingCommunities}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className={classes.emptyStateContainer}>
          <EmptyState
            imgSrc={EmptyStateImage}
            heading="Nenhuma comunidade cadastrada!"
            subheading="Cadastre uma nova comunidade em nosso aplicaticativo."
          />
        </div>
      )}
    </div>
  );
};

export default CommunitiesDisplayPage;
