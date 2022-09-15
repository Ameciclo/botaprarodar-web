import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { EmptyStateImage } from 'shared/assets/images';
import EmptyState from 'shared/components/EmptyState/EmptyState';
import User from '../../models/User';
import UserService from '../../services/UserService';
import Loading from '../../../../shared/components/Loading/Loading';
import UserCard from './components/UserCard/UserCard';
import useStyles from './UserPage.styles';

const UserPage: React.FC = () => {
  const location = useLocation();
  const communityId = location.state?.communityId;
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();

  useEffect(() => {
    UserService.getUsersByCommunity(communityId)
      .then(res => {
        setUsers(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [communityId]);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.heading}>
        Usuárias do Bota pra Rodar
      </Typography>
      {loading ? (
        <Loading />
      ) : users.length ? (
        <Grid
          container
          data-testid="userList"
          className={classes.userList}
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          {users?.map(user => {
            return (
              user.id && (
                <Grid item xl={3} lg={4} md={6} xs={12} key={user.id}>
                  <UserCard user={user} />
                </Grid>
              )
            );
          })}
        </Grid>
      ) : (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Nenhuma usuária cadastrada!"
          subheading="Cadastre uma nova usuária em nosso aplicativo."
        />
      )}
    </div>
  );
};

export default UserPage;
