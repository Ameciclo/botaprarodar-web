import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Community from '../../models/Community/Community';
import CommunityService from '../../services/CommunityService/CommunityService';
import useStyles from './CommunityPage.style';
import CommunityCard from './components/CommunityCard/CommunityCard';

const CommunityPage: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  const classes = useStyles();

  useEffect(() => {
    CommunityService.getAllCommunities()
      .then(res => {
        setCommunities(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.pageTitle}>
        Comunidades
      </Typography>
      <Grid container spacing={4}>
        {communities?.map(community => (
          <Grid item lg={3}>
            <CommunityCard key={community.id} community={community} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommunityPage;
