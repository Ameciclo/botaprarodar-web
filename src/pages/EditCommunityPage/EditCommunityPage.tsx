import Community from 'models/Community/Community';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommunityService from 'services/CommunityService/CommunityService';
import { Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { Loading } from 'components';
import useStyles from './EditCommunityPage.styles';
import EditCommunityForm from './components/EditCommunityForm/EditCommunityForm';

const EditCommunityPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
  }, [id]);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.heading}>
        <Link to="/comunidades" style={{ display: 'flex' }}>
          <ArrowBackIos /> Editar
        </Link>
      </Typography>
      {loading ? <Loading /> : <EditCommunityForm community={community} />}
    </div>
  );
};

export default EditCommunityPage;
