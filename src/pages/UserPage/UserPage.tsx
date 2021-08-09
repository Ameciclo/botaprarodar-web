import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import User from '../../models/Users/User';
import UserService from '../../services/UserService/UserService';
import UserCard from './components/UserCard/UserCard';
import useStyles from './UserPage.styles';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const classes = useStyles();

  useEffect(() => {
    UserService.getAllUsers()
      .then(res => {
        setUsers(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.heading}>
        Usuários
      </Typography>
      <ul data-testid="userList" className={classes.userList}>
        {users?.map(user => (
          <UserCard user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
