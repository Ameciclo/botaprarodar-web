import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import User from '../../models/Users/User';
import UserService from '../../services/UserService/UserService';
import UserCard from './components/UserCard/UserCard';
import './UserPage.scss';

const useStyles = makeStyles({
  userList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
  },
});

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
    <div>
      <ul data-testid="userList" className={classes.userList}>
        {users?.map(user => (
          <UserCard user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
