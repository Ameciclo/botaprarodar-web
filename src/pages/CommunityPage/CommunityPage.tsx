import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Community from '../../models/Community/Community';
import CommunityService from '../../services/CommunityService/CommunityService';
import useStyles from './CommunityPage.styles';
import CommunityCard from './components/CommunityCard/CommunityCard';
import Loading from '../../components/Loading/Loading';

const CommunityPage: React.FC = () => {
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
      <Typography variant="h5" gutterBottom className={classes.pageTitle}>
        Comunidades
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={4} data-testid="communities-grid">
          {communities?.map(community => (
            <Grid
              key={community.id}
              item
              lg={3}
              md={6}
              sm={12}
              className={classes.card}
            >
              <CommunityCard key={community.id} community={community} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CommunityPage;
