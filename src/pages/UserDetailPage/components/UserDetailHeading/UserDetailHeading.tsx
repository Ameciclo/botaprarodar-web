import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import User from 'models/Users/User';
import UserDetailMenu from '../UserDetailMenu/UserDetailMenu';
import useStyles from './UserDetilHeading.styles';

interface UserHeadingProps {
  user?: User;
}

const UserDetailHeading: React.FC<UserHeadingProps> = ({ user, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      {...rest}
    >
      <Grid item xs={12} className={classes.userBackground} />
      <Grid item xs={6} className={classes.userContainer}>
        <Avatar
          className={classes.avatar}
          src={user?.profilePicture}
          alt="profile"
        />
        <Typography variant="h4" className={classes.username}>
          {user?.name}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <UserDetailMenu isBlocked={false} />
      </Grid>
    </Grid>
  );
};

export default UserDetailHeading;
