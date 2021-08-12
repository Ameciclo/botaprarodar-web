import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 60,
    height: 60,
    marginBottom: 20,
    [theme.breakpoints.up('sm')]: {},
  },
}));
