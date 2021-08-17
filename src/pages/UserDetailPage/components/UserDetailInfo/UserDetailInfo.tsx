import User from 'models/Users/User';
import { Grid, Typography, Card } from '@material-ui/core';
import { PinDrop } from '@material-ui/icons';
import React from 'react';

interface UserInfoProps {
  user?: User;
}

const UserDetailInfo: React.FC<UserInfoProps> = ({ user, ...rest }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      {...rest}
    >
      <Grid item xs={12} md={4}>
        <Card>
          <PinDrop />
          <Typography>{user?.address}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <PinDrop />

          <Typography>{user?.address}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <PinDrop />

          <Typography>{user?.address}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserDetailInfo;
