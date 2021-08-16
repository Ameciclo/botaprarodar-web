import React, { useState } from 'react';
import { Loading } from 'components';
import { Typography } from '@material-ui/core';
import useStyles from './UserDetailPage.styles';

const UserDetailPage: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.heading}>
        Usuários
      </Typography>
      {loading ? <Loading /> : <p>oiiii</p>}
    </div>
  );
};

export default UserDetailPage;
