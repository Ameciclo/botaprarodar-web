import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
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
        <ul data-testid="userList" className={classes.userList}>
          {users?.map(user => {
            return user.id && <UserCard user={user} key={user.id} />;
          })}
        </ul>
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
