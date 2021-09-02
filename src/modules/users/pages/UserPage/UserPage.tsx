import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import EmptyState from 'shared/components/EmptyState/EmptyState';
import { EmptyStateImage } from 'shared/assets/images';
import User from '../../models/User';
import UserService from '../../services/UserService';
import UserCard from './components/UserCard/UserCard';
import useStyles from './UserPage.styles';
import Loading from '../../../../shared/components/Loading/Loading';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles();

  useEffect(() => {
    UserService.getAllUsers()
      .then(res => {
        setUsers(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
                <Grid item xl={3} lg={4} md={6} xs={12}>
                  <UserCard user={user} key={user.id} />
                </Grid>
              )
            );
          })}
        </Grid>
      ) : (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Nenhuma usuária cadastrada!"
          subheading="Cadastre uma nova usuária em nosso aplicaticativo."
        />
      )}
    </div>
  );
};

export default UserPage;
