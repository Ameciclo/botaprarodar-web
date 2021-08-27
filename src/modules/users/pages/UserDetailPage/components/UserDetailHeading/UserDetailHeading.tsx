import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './UserDetilHeading.styles';

const UserDetailHeading: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.userBackground} />
    </Grid>
  );
};

export default UserDetailHeading;
