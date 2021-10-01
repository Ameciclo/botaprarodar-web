import { Button, Grid } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC } from 'react';
import DashboardButtonStyles from './DashboardButton.styles';

interface DashboardButtonProps {
  label: string;
  onClick(): void;
  index: number;
  selectedData: number;
}
const DashboardButton: FC<DashboardButtonProps> = ({
  label,
  onClick,
  selectedData,
  index,
}) => {
  const classes = DashboardButtonStyles();
  return (
    <Grid item>
      <Button
        variant="contained"
        className={clsx({
          [classes.button]: true,
          [classes.selected]: index === selectedData,
        })}
        disableElevation
        fullWidth
        onClick={onClick}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default DashboardButton;
