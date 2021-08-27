import React, { useEffect, useState } from 'react';
import { Loading } from 'shared/components';
import { Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import User from 'modules/users/models/User';
import UserService from 'modules/users/services/UserService';
import useStyles from './UserDetailPage.styles';
import { UserDetailHeading, UserDetailInfo } from './components';

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [user, setUser] = useState<User>({} as User);
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
        <Link to="/usuarios" style={{ display: 'flex' }}>
          <ArrowBackIos /> Perfil de {user.name}
        </Link>
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <UserDetailHeading />
          <UserDetailInfo user={user} />
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
