import { Button, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import DashboardButtonStyles from './DashboardButton.styles';

interface DashboardButtonProps {
  label: string;
}
const DashboardButton: FC<DashboardButtonProps> = ({ label }) => {
  const classes = DashboardButtonStyles();
  return (
    <Grid item>
      <Button
        variant="contained"
        className={classes.button}
        disableElevation
        fullWidth
      >
        {label}
      </Button>
    </Grid>
  );
};

export default DashboardButton;
