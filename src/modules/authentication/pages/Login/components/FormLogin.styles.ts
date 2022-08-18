import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  form: {
    padding: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  wrapperButton: {
    marginTop: theme.spacing(2),
  },

  wrapperError: {
    textAlign: 'center',
  },
}));
