import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

const ButtonGrid: FC = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      style={{ marginBottom: '10px' }}
    >
      {children}
    </Grid>
  );
};

export default ButtonGrid;
