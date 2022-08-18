import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  wrapperBrand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(4),
  },
  wrapperButton: {
    marginTop: theme.spacing(2),
  },
}));
