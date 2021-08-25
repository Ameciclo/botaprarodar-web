import { CircularProgress, Typography } from '@material-ui/core';
import UserCardStyles from './Loading.styles';

export default function Loading() {
  const classes = UserCardStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loading} size="60" />
      <Typography component="h6">Carregando, por favor aguarde...</Typography>
    </div>
  );
}
