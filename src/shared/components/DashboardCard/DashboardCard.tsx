import React, { FC } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DashboardCardStyles from './DashboardCard.styles';

interface DashboardCardProps {
  title: string;
  text: string | number | undefined;
}
const DashboardCard: FC<DashboardCardProps> = ({ title, text }) => {
  const classes = DashboardCardStyles();
  return (
    <Paper>
      <Grid item className={classes.cardGrid}>
        <Typography color="textSecondary" className={classes.cardTitle}>
          {title || ''}
        </Typography>
        <Typography color="textPrimary" className={classes.cardContent}>
          {text || 0}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default DashboardCard;
