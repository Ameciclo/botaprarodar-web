import { Typography } from '@material-ui/core';
import React from 'react';
import { UserEmptyStateImage } from '../../../../assets/images';
import useStyles from './UserEmptyState.style';

export default function UserEmptyState() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={UserEmptyStateImage} alt="Biker" className={classes.image} />
      <Typography variant="h3" component="h3" className={classes.heading}>
        {' '}
        Nenhum usuário cadastrado
      </Typography>
      <Typography variant="h4" component="h4" className={classes.subheading}>
        Cadastre um novo usuário em nosso aplicaticativo!
      </Typography>
    </div>
  );
}
