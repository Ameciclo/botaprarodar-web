import React, { useEffect, useState } from 'react';
import { Loading } from 'components';
import { Typography, Avatar } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import User from 'models/Users/User';
import UserService from 'services/UserService/UserService';
import useStyles from './UserDetailPage.styles';
import UserDetailMenu from './components/UserDetailMenu/UserDetailMenu';

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    UserService.getUserById(id)
      .then(res => {
        setUser(res);
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
        <Link to="/usuarios"> {'< Perfil do usuário'}</Link>
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className={classes.userContainer}>
            <Avatar
              className={classes.avatar}
              src={user?.profilePicture}
              alt="profile"
            />
            <Typography variant="h4" className={classes.username}>
              {user?.name}
            </Typography>
            <UserDetailMenu isBlocked={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
